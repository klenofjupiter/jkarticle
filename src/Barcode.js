import React, { Component } from 'react';
import * as d3 from 'd3';
import makeData, { show, hide } from './makeData'
export default class Barcode extends Component {

  componentDidMount() {
    makeData(this.props.data, this.props.clickHandler, this.props.status, this.props.distance)

      let score = document.getElementById('distance-score');
      let rect = score.getBoundingClientRect();
      if(rect.top > 0 && rect.top < window.innerHeight){
        show('.distance-toggle')
      }else{
        hide('.distance-toggle')
      }
      window.addEventListener('scroll', () => {
       let score = document.getElementById('distance-score');
       let rect = score.getBoundingClientRect();
       if(rect.top > 0 && rect.top < window.innerHeight){
         show('.distance-toggle')
       }else{
         hide('.distance-toggle')
       }
      })
  }
  shouldComponentUpdate(nextProps) { 
    // if(nextProps.status !== this.props.status) return true;
    return false;
  }
  //update when click-handler resends props
  componentWillReceiveProps(nextProps){
    d3.selectAll("svg > *").remove();  //this prevents multiple instances of the svg tag from being drawn and crowding one another
    makeData(nextProps.data, nextProps.clickHandler, this.props.status, this.props.distance)
      let score = document.getElementById('distance-score');
      let rect = score.getBoundingClientRect();
      if(rect.top > 0 && rect.top < window.innerHeight){
        show('.distance-toggle')
      }else{
        hide('.distance-toggle')
      }
 }

  render() {
    console.log('clickHAndler', this.props.clickHandler)
    return (<svg id="viz" />)
   }
}
  













