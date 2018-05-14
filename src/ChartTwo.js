import React, { Component } from 'react';
import * as d3 from 'd3';
import ChartTwoData from './ChartTwoData';


export default class ChartTwo extends Component {
 componentDidMount() {
 	//some d3 shit
 	ChartTwoData();
 }
 shouldComponentUpdate(){
 	return false;
 }
 render() {
   return (
   	 <div id='chart-two' />
   )
 }
}