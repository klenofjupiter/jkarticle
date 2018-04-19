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
 	  return (<div className="barcode-wrapper">
              <h2>A Hero's Barcode</h2>
              <svg id="viz"/>
           </div>)
   }
}

 const makeData = (data) => {
    let complex = []
     for (let field in data) {
        complex.push(data[field])
     }

    let outline = d3.select('#viz').selectAll('rect .bars')
      .data(complex)
      .enter()
      .append('svg:rect')
      .attr('x','80')
      .attr('y', (d, i) => i*25)
      .attr('height', '25')
      .attr('width', '100')
      .style('stroke', 'black')
      .style('fill', '#d3d8d0')
      .style('stroke-width', '1')

    let labels = d3.select('#viz').selectAll('.label')
                   .data(complex)
                   .enter()
                   .append('text')
                   .attr('x', '120' )
                   .attr('y', (d,i) => i*25-5)
                   .attr('class',' label')
                   .attr('stroke', '#28440c')
                   .text((d) => d)



  } 