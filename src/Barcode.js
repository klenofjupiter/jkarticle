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

    let outline = d3.select('#viz').selectAll('rect .bars')
      .data(ordinal)
      .enter()
      .append('svg:rect')
      .attr('x','80')
      .attr('y', (d, i) => {
         let height = i*25
         return height
      })
      .attr('height', '25')
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
    let complex = []
     for (let field in data) {
        complex.push(data[field])
     }

    let labels = d3.select('#viz').selectAll('.label')
                   .data(complex)
                   .enter()
                   .append('text')
                   .attr('x', '150' )
                   .attr('y', (d,i) => i*25-5)
                   .attr('class',' label')
                   .attr('stroke', '#28440c')
                   .text((d) => d)



  } 