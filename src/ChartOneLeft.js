import React, { Component } from 'react';
import * as d3 from 'd3';
import chartOneLeftData from './chartOneLeftData';

export default class ChartOneLeft extends Component {
  componentDidMount() {
     chartOneLeftData();
  }

  shouldComponentUpdate(nextProps) {
     return false
  }

  componentWillReceiveProps(nextProps) {
  	//prop changing behavior here
      // chartOneLeftData();
  }

  render() {
  	return (
      <div className="chart-one-left">
{  /*      <h2>Segments</h2>
      <div id="form">
        <label><input type="radio" name="mode" value="bycount" checked />Raw Count</label>
        <label><input type="radio" name="mode" value="bypercent" />Percent of Segments</label>
      </div> */}
        <div id="chart" />
      </div>
  		)
  }
}








