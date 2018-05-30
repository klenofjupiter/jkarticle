import React, { Component } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

export default class PageSevenChart extends Component {
  constructor() {
  	super();
  	this.drawData = this.drawData.bind(this);
  }
  componentDidMount() {
  	axios.get('b2b2c_res.csv')
  	.then((result) => {
     	let data = result.data.split('\n')
     	let columnNames = data.slice(0,1)
     	data = data.slice(1, data.length - 1);
     	let newData = []
     	data.forEach((row) => {
     		let toPush = row.split(',');
     		newData.push(toPush)
     	})
     	// console.log('column names', columnNames)
     	console.log('data', newData)
     	this.drawData(newData)
  	})
  }

  render() {
  	return <div className="page-seven-chart" /> 
  }

  drawData(data, year="2016") {
    let savedData = data;
    const b2b = data.filter((biz) => (biz[1] === 'b2b') && (biz[0] === year));
    const b2c = data.filter((biz) => (biz[1] === 'b2c') && (biz[0] === year));
    const all = data.filter((biz) => biz[0] === year);
    const totalb2b = b2b.reduce((val, el) => val + Number(el[3]), 0) 
    const totalb2c = b2c.reduce((val, el) => Number(val) + Number(el[3]), 0)
    const totalCompanies = totalb2b + totalb2c

    console.log('all', all)
 
    const width = 800
    const height = 800
    const radius = Math.min(width, height)/2

    const plot = d3.select('.page-seven-chart').append(('svg')).attr('width',width).attr('height',height)
    const arc = d3.arc()
              .outerRadius(300)
              .innerRadius(200)
    const labelArc = d3.arc().outerRadius(290).innerRadius(180)
    const pie = d3.pie().sort(null).value((d) =>{ return d[3] })
    const g = plot.selectAll('.arc-1')
                  .data(pie(all))
                  .enter()
                  .append('g')
                  .attr('class', 'arc-1')
                  .attr('transform', 'translate(400,400)')
                  .on('click', () => {
                    let newYear;
                    if (year === '2016'){
                      newYear = '2007'
                    }else{
                      newYear =( Number(year) + 1)+ ""
                    }
                    d3.selectAll('#page-six-chart > *').remove()
                      this.drawData(savedData, newYear)
                  })
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
  }
}


    function reds(ind){
      let colors = ['','#7a221b', '#992a22', ' #b73229', '#d63b2f', '#f44336', '#f66257', '#f88279', '#faa19b']
      return colors[ind]
     }

     function blues(ind) {
       let colors = ['','#005073', '#1ebbd7', '#107dac','#189ad3', ' #71c7ec', '#00FFFF', '#00CCFF', '#0000FF']
       return colors[ind]
     }