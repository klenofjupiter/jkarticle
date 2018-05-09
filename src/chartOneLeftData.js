import * as d3 from 'd3'

const ChartOneLeftData = () => {
  let data = [{year:'2007', 'old_companies':'1331', 'new_companies': '0'},{year:'2008', 'old_companies':'1301', 'new_companies': '36'},{year:'2009','old_companies':'1311', 'new_companies': '27'},{year:'2010','old_companies':'1308', 'new_companies': '47'}, {year:'2011','old_companies':'1327', 'new_companies': '73'},{year:'2012','old_companies':'1368', 'new_companies': '81'},{year:'2013','old_companies':'1425', 'new_companies': '78'},{year:'2014', 'old_companies':'1480', 'new_companies': '28'},{year:'2015','old_companies':'1446', 'new_companies': '28'},{year:'2016', 'old_companies':'1363', 'new_companies': '7'},]

  data.sort(function(a,b) { return +a.total - +b.total;});

	var marginStacked = {top: 20, right: 150, bottom: 50, left: 40},
    widthStacked = 600 - marginStacked.left - marginStacked.right,
    heightStacked = 500 - marginStacked.top - marginStacked.bottom;


let demesne = data.map((d) => d.year)
const xScale = d3.scaleBand().domain(demesne).rangeRound([0, widthStacked]).paddingInner(0.3)
  
  // yScale.domain([0, d3.max(stacked[stacked.length-1], function(d) { return d.y0 + d.y; })]);

var yScale = d3.scaleLinear().rangeRound([heightStacked, 0]).domain([0, 1600]);

var color = d3.scaleOrdinal().range(["#ff6600","#ffb380","#003399","#80aff", "#ffcc00", "#ffe680", "#339933", "#9fdf9f"]);

var xAxis = d3.axisBottom(xScale).tickSizeInner([0]);

var yAxis = d3.axisLeft(yScale).tickFormat(d3.format(".2s")); // for the stacked totals version

// var stack = d3.stack(); // default view is "zero" for the count display.


var svg = d3.select("#chart").append("svg")
    .attr("width", widthStacked + marginStacked.left + marginStacked.right)
    .attr("height", heightStacked + marginStacked.top + marginStacked.bottom)
    .attr('class', 'chart-one-left-svg')
    .append("g")
    .attr("transform", "translate(" + marginStacked.left + "," + marginStacked.top + ")");

var tooltip = d3.select("body")
                .append("div")
                .attr("class", "tooltip");

var percentClicked = false;



  var segmentsStacked = ["old_companies",	"new_companies"];

  let firstStack = d3.stack().keys(segmentsStacked)
  let stacked = firstStack(data)

  // xScale.domain(data.map(function(d) { return d.year; }));

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
      .data(segmentsStacked)
      .enter().append("g")
      .attr("class", "year")
      .style("fill", function(d, i) { return color(i); });


  var rectangles = year.selectAll("rect")
       .data(function(d) {
        return d; })  // this just gets the array for bar segment.
       .enter()
       .append("rect")
       .attr('class', 'test-rects')
       .attr("width", xScale.bandwidth());

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
    let output = segmentsStacked.map(function(component) {
        return data.map(function(d) {
          return {x: d["year"], y: +d[component], component: component};
        })
      });
    return output
  }


  function transitionPercent() {

    yAxis.tickFormat(d3.format("%"));
   let stack =  d3.stack().offset("expand");  // use this to get it to be relative/normalized!
    var stacked = stack(makeData(segmentsStacked, data));
    // call function to do the bars, which is same across both formats.
    transitionRects(stacked);
  }

  function transitionCount() {

     yAxis.tickFormat(d3.format(".2s")); // for the stacked totals version
     let newStack = d3.stack().keys(segmentsStacked).order(d3.stackOrderNone).offset(d3.stackOffsetNone)
     let stacked = newStack(data)
     transitionRects(stacked);

    }

  function transitionRects(stacked) {

    // this domain is using the last of the stacked arrays, which is the last illness, and getting the max height.
    // yScale.domain([0, d3.max(stacked[stacked.length-1], function(d) { return d.y0 + d.y; })]);
    // console.log('yscallle', yScale(3))

    // attach new fixed data
    var year = svg.selectAll(".year")
      .data(stacked);

    // same on the rects
    year.selectAll("rect")
      .data(function(d) {
        console.log('ddddd', d)
        return d;
      })  // this just gets the array for bar segment.
   //THIS IS WHERE THE CURRENT PROBLEM IS -- undefined y and height attr's

   
    svg.selectAll("g.year rect")
      .transition()
      .duration(250)
      .attr("x", function(d, i) {
        console.log('desmesne', demesne[i])
        if (i < demesne.length){
          return xScale(demesne[i])
        }else{
          return xScale(demesne[i - demesne.length])
        }
      })
      .attr("y", function(d) {
        // console.log('dy',  d)
        // if (typeof d[0] === "number" && typeof d[1] === "number"){
          // let val = yScale(d[1])
          // return d[0] + d[1];
        // }
        // return yScale(d.y0 + d.y); 
        // if (d.data) return yScale(d.data.new_companies + d.data.old_companies)
        //   return null
         if (typeof d[0] === 'number') return yScale(d[0] + d[1])
          return 0
      }) 
      .attr("height", function(d) {
        // return yScale(d.y0) - yScale(d.y0 + d.y); 

         // if (d.data) return yScale(d.data.new_companies - yScale(d.data.new_companies + d.data.old_companies))
         //  return null
         // let height = d[0] - yScale(d[1])
         // yScale(d.y0) - yScale(d.y0 + d.y);
         if (typeof d[0] === 'number')return yScale(d[0]) - yScale(d[0] + d[1])
          return 0 
         // return yScale(d[0]) - yScale(d[1])
        });  // height is base - tallness

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
        if(percentClicked) {
          tooltip
            .style("display", null)
            .html("<p><span class='tooltipHeader'>" + d3.format("%")(d.y) + "</p>");
            // .html("<p><span class='tooltipHeader'>" + d.x + "</span><br>"+ d.component + ": " + d3.format("%")(d.y) + "</p>");
        } else {
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

}

export default ChartOneLeftData;