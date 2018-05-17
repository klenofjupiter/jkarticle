import React, { Component } from 'react';
import * as d3 from 'd3';
import axios from 'axios'
export default class PageSixChart extends Component {
  constructor(){
    super();
    this.drawData = this.drawData.bind(this);
  }
  componentDidMount() {
     axios.get('b2b2c_act.csv')
     .then((result) => {
     	let data = result.data.split('\n')
     	data = data.slice(1, data.length-1);
     	let newData = []
     	data.forEach((row) => {
     		let toPush = row.split(',');
     		newData.push(toPush)
     	} )
        this.drawData(newData);
     })
  }
  shouldComponentUpdate(nextProps){
  	return false;
  }
  render(){
  	return <div id='page-six-chart' />
  }
  drawData(data, year="2016") {
    let savedData = data;
    const b2b = data.filter((biz) => (biz[1] === 'b2b') && (biz[0] === year));
    const b2c = data.filter((biz) => (biz[1] === 'b2c') && (biz[0] === year));
    const all = data.filter((biz) => biz[0] === year);
    const totalb2b = b2b.reduce((val, el) => val + Number(el[3]), 0) 
    const totalb2c = b2c.reduce((val, el) => Number(val) + Number(el[3]), 0)
    const totalCompanies = totalb2b + totalb2c

    const width = 800
    const height = 800
    const radius = Math.min(width, height)/2
    
    const plot = d3.select('#page-six-chart').append(('svg')).attr('width',width).attr('height',height)
                  // .attr('transform', 'translate(' + (width/2) + "," + (height/2) + ")")
   //produce the appropriate angles    
    const arc = d3.arc()
              .outerRadius(300)
              .innerRadius(200)

    const labelArc = d3.arc().outerRadius(290).innerRadius(180)

    const pie = d3.pie().sort(null).value((d) => d[3])
    const g = plot.selectAll('.arc-1')
                  .data(pie(all))
                  .enter()
                  .append('g')
                  .attr('class', 'arc-1')
                  .attr('transform', 'translate(400,400)')
   //draw the chart
     let redCounter = 0; let blueCounter = 0
    g.append('path')
     .attr('d', arc)
     .style('fill',(d,i) => {
      if (d.data[1] === 'b2b'){
        redCounter++
        return reds(redCounter)
      }else{
        blueCounter++
        return blues(blueCounter)
      }
     })
    
    g.append('text')
    .attr('transform', (d) => 'translate(' + labelArc.centroid(d) +')')
    .attr('dy', '.35em')
    .attr('class', 'chart-label')
    .attr('text-anchor', 'end')
    .text(d => {
      if (d.data[1] == 'b2b'){
        return b2bDictionary[d.data[2]]
      }
      return b2cDictionary[d.data[2]]
    })
  
  d3.selectAll('.chart-label').each(function(d){
     if((d.data[1] === 'b2b') && ( d.data[2] === '2.2.2')){
       let car = d3.select(this).attr('transform', 'translate(275,0)')
     }
  })
     //chart label
      g.append('text')
      .text((d) => "Businesses in "+ d.data[0])
      .style('fill', 'gray')
      .style('font-size', '1.25em')
      .style('font-weight', 'lighter')
      .attr('transform', 'translate(-90, 0)')
      .on('click', () => {
        let newYear;
        if (year == '2016'){
          newYear = '2007'
        }else{
          newYear =( Number(year) + 1)+ ""
        }
        d3.selectAll('#page-six-chart > *').remove()
          this.drawData(savedData, newYear)
      })
  }
}

    function reds(ind){
      let colors = ['','#a70000', '#ff0000', ' #ff5252', '#ff7b7b', '#ffbaba']
      return colors[ind]
     }

     function blues(ind) {
       let colors = ['','#005073', '#1ebbd7', '#107dac','#189ad3', ' #71c7ec']
       return colors[ind]
     }


const b2bDictionary = {
  '2.2.2': 'Produce', 
  '3.1.2': 'Lease', 
  '3.3.2': 'Lease',
  'others' : 'others',
}
const b2cDictionary = {
  '2.2.2': 'Produce', 
  '3.1.2': 'Sell', 
  'others': 'others',
}










