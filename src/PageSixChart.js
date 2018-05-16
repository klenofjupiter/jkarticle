import React, { Component } from 'react';
import * as d3 from 'd3';
import axios from 'axios'
export default class PageSixChart extends Component {
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

     	let totalCompanies = newData.length
     	let b2b = newData.filter((biz) => biz[1] === 'b2b');
     	let b2c = newData.filter((biz) => biz[1] === 'b2c') ;
     	let b2bTotal = b2b.length;
     	let b2cTotal = b2c.length;
        console.log('b2b', b2b)
        console.log('b2c', b2c)
     })
  }
  shouldComponentUpdate(){
  	return false;
  }
  render(){
  	return <div id='page-six-chart' />
  }
}