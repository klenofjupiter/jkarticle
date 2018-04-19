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
  //got complex updates?
  // componentWillReceiveProps(nextProps){
 // }

   render() {
 	  return (<div>
              <h2>A Hero's Barcode</h2>
              <svg id="viz"/>
           </div>)
   }
}

 const makeData = (data) => {
    let ordinal = Object.keys(data)
    console.log('ordinal', ordinal)
    let outline = d3.select('#viz').selectAll('rect .bars')
      .data(ordinal)
      .enter()
      .append('svg:rect')
      .attr('x','80')
      .attr('y', (d, i) => {
         let height = i*10
         return height
      })
      .attr('height', '10')
      .attr('width', '20vw')
      .style('stroke', 'black')
      .style('fill', 'none')
      .style('stroke-width', '1')
      // .on('mouseover', (el) => {
      //   el.attr('height', '20')
      // })
      // .on('mouseout', (el) => {
      //   el.attr('height', '10')
      // })


    console.log('test', outline)

  } 