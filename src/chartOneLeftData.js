import * as d3 from 'd3'

const ChartOneLeftData = () => {
  const data = [{year:'2007', 'old_companies':'1331', 'new_companies': '0'},{year:'2008', 'old_companies':'1301', 'new_companies': '36'},{year:'2009','old_companies':'1311', 'new_companies': '27'},{year:'2010','old_companies':'1308', 'new_companies': '47'}, {year:'2011','old_companies':'1327', 'new_companies': '73'},{year:'2012','old_companies':'1368', 'new_companies': '81'},{year:'2013','old_companies':'1425', 'new_companies': '78'},{year:'2014', 'old_companies':'1480', 'new_companies': '28'},{year:'2015','old_companies':'1446', 'new_companies': '28'},{year:'2016', 'old_companies':'1363', 'new_companies': '7'},]
  
   let hackData = [
   {y: 1331, y0: 0}, 
   {y:1301, y0: 0}, 
   {y:1311, y0: 0}, 
   {y:1308, y0: 0}, 
   {y:1327, y0: 0}, 
   {y:1368, y0: 0}, 
   {y:1425, y0: 0}, 
   {y:1480, y0: 0}, 
   {y:1446, y0: 0}, 
   {y:1363, y0: 0}, 
   {y:0, y0: 1331}, 
   {y: 36, y0: 1301}, 
   {y:27, y0: 1311}, 
   {y:47, y0: 1308}, 
   {y:73, y0: 1327}, 
   {y:81, y0: 1368}, 
   {y:78, y0: 1425}, 
   {y:28, y0: 1480},
   {y:19, y0: 1446},  
   {y:7, y0: 1363}, 
   ]

  const marginStacked = {top: 20, right: 150, bottom: 50, left: 40},
    widthStacked = 600 - marginStacked.left - marginStacked.right,
    heightStacked = 500 - marginStacked.top - marginStacked.bottom;
  const yearArr = data.map((d) => d.year)
  const xScale = d3.scaleBand().domain(yearArr).rangeRound([0, widthStacked]).paddingInner(0.3)
  const yScale = d3.scaleLinear().rangeRound([heightStacked, 0]).domain([0, 1800]);
  const xAxis = d3.axisBottom(xScale).tickSizeInner([0]);
  const yAxis = d3.axisLeft(yScale).tickFormat(d3.format('.2s'))
  const color = d3.scaleOrdinal().range(["#ff6600","#ffb380","#003399","#80aff", "#ffcc00", "#ffe680", "#339933", "#9fdf9f"]);

  const svg = d3.select('#chart').append('svg')
    .attr("width", widthStacked + marginStacked.left + marginStacked.right)
    .attr("height", heightStacked + marginStacked.top + marginStacked.bottom)
    .attr('class', 'chart-one-left-svg')
    .append("g")
    .attr("transform", "translate(" + marginStacked.left + "," + marginStacked.top + ")");

  let percentClicked = false;

  const segmentsStacked = ['old_companies', 'new_companies']
  const firstStack = d3.stack().keys(segmentsStacked)
  const stack = firstStack(data);

  svg.append('g')
     .attr('class', 'x axis')
     .attr('transform',  'translate(0,' + heightStacked+')')
     .call(xAxis)
     .selectAll('text')
        .attr('dy', '1em')
        .attr('dx', '1em')
        .style('text-anchor', 'end');

  svg.append('g')
    .attr('class','y axis')
    .call(yAxis)

  const year = svg.selectAll('.year')
                .data(segmentsStacked).enter()
                .append('g')
                .attr('class', 'year')
                .style('fill', (d,i) => {
                  // return color(i)
                })

  const rectangles = year.selectAll('rect')
        .data((d) => d)
        .enter()
        .append('rect')
        .attr('class', 'test-rects')
        .attr('width', xScale.bandwidth()-2);


  yAxis.tickFormat(d3.format('.2s'))
  const newStack = d3.stack().keys(segmentsStacked).order(d3.stackOrderNone).offset(d3.stackOffsetNone)
  const stacked = newStack(data)
  const otherYear = svg.selectAll('.year')
                        .data(stacked)
  otherYear.selectAll('rect')
   .data(function(d){return d})



   svg.selectAll('g.year rect')
    .transition()
    .duration(250)
    .attr('x', function(d,i){
      if (i < yearArr.length){
        return xScale(yearArr[i]) + 3
      }else{
        return xScale(yearArr[i - yearArr.length]) + 3
      }
    })
    .attr('y', (d, i) => {
       if(hackData[i]) return yScale(hackData[i].y0 + hackData[i].y)

    })
    .attr('height', (d, i) => {
      if (hackData[i]) return yScale(hackData[i].y0) - yScale(hackData[i].y0 + hackData[i].y)
    })
    .style('fill', (d, i) => {
      if (i < 10){
        return '#ff6600'
      }else if(i < 20) {
        return "#ffb380"
      }
    })

//legends

    const labels = ["Businesses", "New Businesses"];
    const legend = svg.selectAll(".legend")
        .data(color.domain().slice()) // what do you think this does?
      .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(0," + Math.abs((i-8) * 20) + ")"; });
        // Added the absolute value and transition. I reversed the names, so that I can continue to use category20(), but have health as green to make it stand out.

    legend.append("rect")
        .attr("x", widthStacked + 7)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

    legend.append("text")
        .attr("x", widthStacked + 30)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .text(function(d, i) { return labels[i]; });

}

export default ChartOneLeftData;