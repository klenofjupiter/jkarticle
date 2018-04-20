import React, { Component } from 'react';
import * as d3 from 'd3';
import makeData from './makeData'
export default class Barcode extends Component {

  componentDidMount() {
    makeData(this.props.data, this.props.clickHandler, this.props.status)
  }
  shouldComponentUpdate(nextProps) { 
    // if(nextProps.status !== this.props.status) return true;
    return false;
  }
  //update when click-handler resends props
  componentWillReceiveProps(nextProps){
    d3.selectAll("svg > *").remove();
    makeData(nextProps.data, nextProps.clickHandler, this.props.status)
 }

  render() {
    return (<svg id="viz" />)
   }
}
  













