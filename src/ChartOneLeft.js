import React, { Component } from 'react';
import * as d3 from 'd3'

export default class ChartOneLeft extends Component {
  componentDidMount() {
		//d3 rules go here
var marginStacked = {top: 20, right: 150, bottom: 50, left: 40},
    widthStacked = 600 - marginStacked.left - marginStacked.right,
    heightStacked = 500 - marginStacked.top - marginStacked.bottom;



var xScale = d3.scale.ordinal()
    .rangeRoundBands([0, heightStacked], .3);

var yScale = d3.scale.linear()
    .rangeRound([heightStacked, 0]);


var color = d3.scale.ordinal().range(["#ff6600","#ffb380","#003399","#80aff", "#ffcc00", "#ffe680", "#339933", "#9fdf9f"]);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .innerTickSize([0]);

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .tickFormat(d3.format(".2s")); // for the stacked totals version

var stack = d3.layout
    .stack(); // default view is "zero" for the count display.

var svg = d3.select("#chart").append("svg")
    .attr("width", widthStacked + marginStacked.left + marginStacked.right)
    .attr("height", heightStacked + marginStacked.top + marginStacked.bottom)
  .append("g")
    .attr("transform", "translate(" + marginStacked.left + "," + marginStacked.top + ")");

var tooltip = d3.select("body")
                .append("div")
                .attr("class", "tooltip");

var percentClicked = false;

d3.csv("segments_table.csv", function(error, data) {

  data.sort(function(a,b) { return +a.total - +b.total;});

  var segmentsStacked = ["old_companies",	"new_companies"];

  var stacked = stack(makeData(segmentsStacked, data));

  xScale.domain(data.map(function(d) { return d.year; }));

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + heightStacked + ")")
      .call(xAxis)
      .selectAll("text")
        .attr("dy", "1em")
        .attr("dx", "1em")
        .style("text-anchor", "end");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("segmentsStacked");

  var year = svg.selectAll(".year")
      .data(stacked)
    .enter().append("g")
      .attr("class", "year")
      .style("fill", function(d, i) { return color(i); });


  var rectangles = year.selectAll("rect")
      .data(function(d) {
        // console.log("array for a rectangle");
        return d; })  // this just gets the array for bar segment.
    .enter().append("rect")
        .attr("width", xScale.rangeBand());

    // this just draws them in the default way, now they're appended.
  transitionCount();

  drawLegend();

  d3.selectAll("input").on("change", handleFormClick);

  // All the functions for stuff above!

  function handleFormClick() {
    if (this.value === "bypercent") {
      percentClicked = true;
      transitionPercent();
    } else {
      percentClicked = false;
      transitionCount();
    }
  }


  function makeData(segmentsStacked, data) {
    return segmentsStacked.map(function(component) {
        return data.map(function(d) {
          return {x: d["year"], y: +d[component], component: component};
        })
      });
  }


  function transitionPercent() {

    yAxis.tickFormat(d3.format("%"));
    stack.offset("expand");  // use this to get it to be relative/normalized!
    var stacked = stack(makeData(segmentsStacked, data));
    // call function to do the bars, which is same across both formats.
    transitionRects(stacked);
  }

  function transitionCount() {

    yAxis.tickFormat(d3.format(".2s")); // for the stacked totals version
    stack.offset("zero");
    var stacked = stack(makeData(segmentsStacked, data));
    transitionRects(stacked);

    }

  function transitionRects(stacked) {

    // this domain is using the last of the stacked arrays, which is the last illness, and getting the max height.
    yScale.domain([0, d3.max(stacked[stacked.length-1], function(d) { return d.y0 + d.y; })]);

    // attach new fixed data
    var year = svg.selectAll(".year")
      .data(stacked);

    // same on the rects
    year.selectAll("rect")
      .data(function(d) {
        console.log("array for a rectangle");
        return d;
      })  // this just gets the array for bar segment.

    svg.selectAll("g.year rect")
      .transition()
      .duration(250)
      .attr("x", function(d) {
        return xScale(d.x); })
      .attr("y", function(d) {
        return yScale(d.y0 + d.y); }) //
      .attr("height", function(d) {
        return yScale(d.y0) - yScale(d.y0 + d.y); });  // height is base - tallness

    svg.selectAll(".y.axis").transition().call(yAxis);
  }
// =====================================================================
// Building a legend by hand, based on http://bl.ocks.org/mbostock/3886208
// ===================================================================

  function drawLegend() {
    var labels = ["Businesses", "New Businesses"];
    var legend = svg.selectAll(".legend")
        .data(color.domain().slice()) // what do you think this does?
      .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(0," + Math.abs((i-8) * 20) + ")"; });
        // Added the absolute value and transition. I reversed the names, so that I can continue to use category20(), but have health as green to make it stand out.

    legend.append("rect")
        .attr("x", widthStacked)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

    legend.append("text")
        .attr("x", widthStacked + 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .text(function(d, i) { return labels[i]; });
  }

// ================================================================
// Mouse Events
// ================================================================

    rectangles
        .on("mouseover", mouseoverFunc)
        .on("mousemove", mousemoveFunc)
        .on("mouseout", mouseoutFunc);


    function mouseoverFunc(d) {


      console.log("moused over", d.x);
        if(percentClicked) {
          tooltip
            .style("display", null)
            .html("<p><span class='tooltipHeader'>" + d3.format("%")(d.y) + "</p>");
            // .html("<p><span class='tooltipHeader'>" + d.x + "</span><br>"+ d.component + ": " + d3.format("%")(d.y) + "</p>");
        } else {
              console.log("segmentsStacked", d.component, "percent", d.y);

              tooltip
                .style("display", null)
                .html("<p><span class='tooltipHeader'>" +d.y + "</p>");
                // .html("<p><span class='tooltipHeader'>" + d.x + "</span><br>"+ d.component + ": " +d.y + "</p>");
        }
    }

    function mousemoveFunc(d) {
        tooltip
            .style("top", (d3.event.pageY - 5) + "px")
            .style("left", (d3.event.pageX + 10) + "px");
    }

    function mouseoutFunc(d) {
        return tooltip.style("display", "none"); // this sets it to invisible!
    }
});
  }

  shouldComponentUpdate(nextProps) {
     return false
  }

  componentWillReceiveProps(nextProps) {
  	//prop changing behavior here
  }

  render() {
  	return (
      <div className="chart-one-left">
        <h2>Segments</h2>
      <div id="form">
        <label><input type="radio" name="mode" value="bycount" checked />Raw Count</label>
        <label><input type="radio" name="mode" value="bypercent" />Percent of Segments</label>
      </div>
        <div id="chart" />
      </div>
  		)
  }
}








