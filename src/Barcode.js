import React, { Component } from 'react';
import * as d3 from 'd3';

export default class Barcode extends Component {
  // constructor(){
  //   super();
  //   //the state itself will be the barcode for now
  //   this.state = {

  //   }
  // }

  componentDidMount() {
  	//rules for D3 go here 
  	makeData(this.props.data)


  }
  shouldComponentUpdate() { 
  	return false;
  }
  //update when click-handler resends props
  componentWillReceiveProps(nextProps){
    makeData(nextProps.data)
 }

  render() {
 	  return (<div>
              <h2>Hi, I'm a Company</h2>
              <svg id="viz"/>
           </div>)
   }
}
  

const makeData = (data) => {
    let cl = []
    for (let field in data.cl){
     cl.push([field, data.cl[field]])
    }

    let clGroup = d3.select('#viz').append('g')

    let companyLocus = clGroup.selectAll('rect .bars')
      .data(cl)
      .enter()
      .append('svg:rect')
      .attr('x','80')
      .attr('y', (d, i) => {
         let height = i*25
         return height
      })
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!cl[i][1]){
          return '#565655'
        }
        if(cl[i][1] == '2.2'){
          return '#FCC528'
        }
        if(cl[i][1] == 'B') {
          return "#64B5F6"
        }
      })
      // .style('stroke-width', '1')
      .attr('class', 'companyLocus')


      let clLabel = clGroup.selectAll('.clLabel')
        .data(cl)
        .enter()
        .append('svg:text')
        .attr('x', '120')
        .attr('y', (d, i) => i*25 -5 +25)
        .attr('stroke', 'black')
        .text((d, i) => cl[i][1] )

    
    let f1 = []
    for (let field in data.f1){
      f1.push([field, data.f1[field]])
    }

    let f1Group = clGroup.append('g')

    let firstInt = f1Group.selectAll('rect .bars')
      .data(f1)
      .enter()
      .append('svg:rect')
      .attr('x','80')
      .attr('y', (d, i) => {
         let height = i*25 + 120
         return height
      })
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!f1[i][1]){
          return '#565655'
        }
        if(f1[i][1] == '2.2'){
          return '#FCC528'
        }
        if(f1[i][1] == 'B') {
          return "#64B5F6"
        }
      })
      .attr('class', 'firstInt')

      let f1Label = clGroup.selectAll('.f1Label')
        .data(f1)
        .enter()
        .append('svg:text')
        .attr('x', '120')
        .attr('y', (d, i) => i*25 + (120-5) + 25)
        .attr('stroke', 'black')
        .text((d, i) => f1[i][1] )

    let f2 = []
    for (let field in data.f2){
      f2.push([field, data.f2[field]])
    }

    let f2Group = f1Group.append('g')

    let secondInt = f2Group.selectAll('rect .bars')
      .data(f2)
      .enter()
      .append('svg:rect')
      .attr('x','80')
      .attr('y', (d, i) => {
         let height = i*25 + 240
         return height
      })
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!f2[i][1]){
          return '#565655'
        }
        if(f2[i][1] === '2.2'){
          return '#FCC528'
        }
        if(f2[i][1] === 'B') {
          return "#64B5F6"
        }
        if(f2[i][1] === 'A') {
          return "#9575CD"
        }
        if(f2[i][1] === '3.1') {
          return "#8BBA25"
        }        

      })


      let f2Label = f2Group.selectAll('.f2Label')
        .data(f2)
        .enter()
        .append('svg:text')
        .attr('x', '120')
        .attr('y', (d, i) => i*25 + (240-5) + 25)
        .attr('stroke', 'black')
        .text((d, i) => f2[i][1] )

    let pucl = []
    for (let field in data.pucl){
      pucl.push([field, data.pucl[field]])
    }
    let puclGroup = f2Group.append('g')

    let puclBars = puclGroup.selectAll('rect .bars')
      .data(pucl)
      .enter()
      .append('svg:rect')
      .attr('x','80')
      .attr('y', (d, i) => {
         let height = i*25 + 360
         return height
      })
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!pucl[i][1]){
          return '#565655'
        }
        if(pucl[i][1] === '2.2'){
          return '#FCC528'
        }
        if(pucl[i][1] === 'B') {
          return "#64B5F6"
        }
        if(pucl[i][1] === 'A') {
          return "#9575CD"
        }
        if(pucl[i][1] === '3.1') {
          return "#8BBA25"
        }        

      })
    let puclLabel = puclGroup.selectAll('.puclLabel')
        .data(pucl)
        .enter()
        .append('svg:text')
        .attr('x', '120')
        .attr('y', (d, i) => i*25 + (240-5) + 25)
        .attr('stroke', 'black')
        .text((d, i) => pucl[i][1] )

    let pufl = []
    for (let field in data.pufl){
      pufl.push([field, data.pufl[field]])
    }
    let puflGroup = puclGroup.append('g')
    let puflBars = puflGroup.selectAll('rect .bars')
      .data(pufl)
      .enter()
      .append('svg:rect')
      .attr('x','80')
      .attr('y', (d, i) => {
         let height = i*25 + 360
         return height
      })
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'none')
      .style('fill', (d, i) => {
        if (!pufl[i][1]){
          return '#565655'
        }
        if(pufl[i][1] === '2.2'){
          return '#FCC528'
        }
        if(pufl[i][1] === 'B') {
          return "#64B5F6"
        }
        if(pufl[i][1] === 'A') {
          return "#9575CD"
        }
        if(pufl[i][1] === '3.1') {
          return "#8BBA25"
        }
        if(pufl[i][1] === '1.2') {
          return "#D8223F"
        }
               

      })
    let puflLabel = puflGroup.selectAll('.puflLabel')
        .data(pufl)
        .enter()
        .append('svg:text')
        .attr('x', '120')
        .attr('y', (d, i) => i*25 + (360-5) + 25)
        .attr('stroke', 'black')
        .text((d, i) => pufl[i][1] )

  
} 













