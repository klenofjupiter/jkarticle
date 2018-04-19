import React, { Component } from 'react';
import * as d3 from 'd3';

export default class Canvas extends Component {

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
 	  return <svg id="viz"/>
   }
}

 const makeData = (data) => {
  	console.log('DATA',data)
    let arr = []
    for (let i = 1; i <= +data; i++){
      let dot = {id: i}
      arr.push(dot)
    }

    let min = arr[0].id
    let max = arr[arr.length -1].id
  } 
