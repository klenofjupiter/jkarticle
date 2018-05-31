import React, { Component } from 'react';
import * as d3 from 'd3';
import makeData, { show, hide } from './makeData'
export default class Barcode extends Component {

  componentDidMount() {
    makeData(this.props.data, this.props.distanceClicker, this.props.status, this.props.distance, this.props.businessClicker, this.props.showB2B)
      let score = document.getElementById('distance-score');
      let rect = score.getBoundingClientRect();
      if(rect && /*rect.top > 0 && */ rect.top < window.innerHeight){
        show('.distance-toggle')
        if(this.props.showB2B){
          this.props.switchClick(false);
         }
      }else{
        hide('.distance-toggle')
        if(!this.props.showB2B){
          this.props.switchClick(true);
        }
        
      }
      window.addEventListener('scroll', () => {
       let score = document.getElementById('distance-score');
       let rect = score.getBoundingClientRect();
       if(/*rect.top > 0 && */rect.top < window.innerHeight){
         show('.distance-toggle')
         this.props.switchClick();
         if(this.props.showB2B){
          this.props.switchClick(false);
         }
       }else{
         hide('.distance-toggle')
         if(!this.props.showB2B){
           this.props.switchClick(true);
         }
       }
      })
  }
  shouldComponentUpdate(nextProps) { 
    return false;
  }
  //update when click-handler resends props
  componentWillReceiveProps(nextProps){
    d3.selectAll("svg.barcode-svg > *").remove();  //this prevents multiple instances of the svg tag from being drawn and crowding one another
    makeData(nextProps.data, nextProps.distanceClicker, nextProps.status, nextProps.distance, nextProps.businessClicker, nextProps.showB2B)
      let score = document.getElementById('distance-score');
      let rect = score.getBoundingClientRect();
      if(/*rect.top > 0 && */ rect.top < window.innerHeight){
        show('.distance-toggle')
        if(this.props.showB2B){
          this.props.switchClick(false);
         }
      }else{
        hide('.distance-toggle')
        if(!this.props.showB2B){
          this.props.switchClick(true);
        }
      }
 }

  render() {
    return ( <svg id="viz" className="barcode-svg" /> )
   }
}
  













