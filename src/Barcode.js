import React, { Component } from 'react';
import * as d3 from 'd3';
import makeData, { show, hide } from './makeData'
export default class Barcode extends Component {

  componentDidMount() {
    makeData(this.props.data, this.props.distanceClicker, this.props.status, this.props.distance, this.props.businessClicker)
   

      let score = document.getElementById('distance-score');
      let rect = score.getBoundingClientRect();
      if(/*rect.top > 0 && */ rect.top < window.innerHeight){
        show('.distance-toggle')
      }else{
        hide('.distance-toggle')
      }
      window.addEventListener('scroll', () => {
       let score = document.getElementById('distance-score');
       let rect = score.getBoundingClientRect();
       if(/*rect.top > 0 && */rect.top < window.innerHeight){
         show('.distance-toggle')
       }else{
         hide('.distance-toggle')
       }
      })
  }
  shouldComponentUpdate(nextProps) { 
    return false;
  }
  //update when click-handler resends props
  componentWillReceiveProps(nextProps){
    d3.selectAll("svg > *").remove();  //this prevents multiple instances of the svg tag from being drawn and crowding one another
    makeData(nextProps.data, nextProps.distanceClicker, nextProps.status, nextProps.distance, nextProps.businessClicker)
      let score = document.getElementById('distance-score');
      let rect = score.getBoundingClientRect();
      if(/*rect.top > 0 && */ rect.top < window.innerHeight){
        show('.distance-toggle')
      }else{
        hide('.distance-toggle')
      }
 }

  render() {
    return ( <svg id="viz" /> )
   }
}
  













