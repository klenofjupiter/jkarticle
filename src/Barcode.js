import React, { Component } from 'react';
import * as d3 from 'd3';
import makeData from './makeData'
export default class Barcode extends Component {

  componentDidMount() {
    makeData(this.props.data, this.props.clickHandler)
  }
  shouldComponentUpdate(nextProps) { 
    if(nextProps.status !== this.props.status) return true;
    return false;
  }
  //update when click-handler resends props
  componentWillReceiveProps(nextProps){
    makeData(nextProps.data, nextProps.clickHandler)
 }

  render() {
    return (<div>
              <h2>Hi, I'm a {this.props.status} Company</h2>
              <p>click on the highlighted loci to change me</p>
              <svg id="viz"/>
           </div>)
   }
}
  













