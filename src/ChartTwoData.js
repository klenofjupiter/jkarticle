import * as d3 from 'd3';
import axios from 'axios'

const ChartTwoData = function() {
    var margin = {top: 50, right: 50, bottom: 50, left: 50},
        width = 600 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scaleBand()
    			.range([0, width], .1);

    var y = d3.scaleLinear()
        .range([height, 0]);

    var xAxis = d3.axisBottom(x);

    var yAxis = d3.axisLeft(y)
        // .ticks(10, "%");

    var tooltip = d3.select("body").append("div").attr("class", "toolTip");

    var svg = d3.select("#chart-two").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // d3.csv("segments_table.csv", type, function(error, data) {
    //   if (error) throw error;

     axios.get('segments_table.csv')
     .then((result) => {

     	let csv = result.data
     	csv = csv.split('\n')
   
     	let data = [];

     	for (let i = 1; i < csv.length - 1; i++){
     	  let temp = csv[i].split(',')
   
           let obj = {}
           obj.sales_amount = temp[0];
           obj.n_companies = Number(temp[1])
           data.push(obj)
     	}
      
      console.log('data', data)

      x.domain(data.map(function(d) { return d.sales_amount; }))
      	.paddingInner(0.1)
      	.paddingOuter(0.5);
      y.domain([0, d3.max(data, function(d) { return d.n_companies; })]);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("class", "label")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Number of Companies");

      svg.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.sales_amount); })
          .attr("width", x.bandwidth())
          .attr("y", function(d) { return y(d.n_companies); })
          .attr("height", function(d) { 
             console.log('height', height - y(d.n_companies))
          	return height - y(d.n_companies); })
        .on("mousemove", function(d){
            tooltip
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html("Companies:" + "<br>" + (d.n_companies));
        })
    		.on("mouseout", function(d){ tooltip.style("display", "none");});;
    });

    function type(d) {
      d.n_companies = +d.n_companies;
      return d;
    } 
}

export default ChartTwoData;