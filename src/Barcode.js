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
    return (<div id="stick">
              <h2>Hi, I'm a <button onClick={this.props.clickHandler}>{this.props.status}</button> Company</h2>
              <svg id="viz" />
           </div>)
   }
}
  













