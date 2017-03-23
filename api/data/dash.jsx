/*
 * Dash Component
 * creator: Dan
 */

//import React from 'react'
//var React = require('react');
//import d3 from 'd3';
// import rd3 from 'rd3';

var BarChart = rd3.BarChart;
//load data source json files
var dayData = require('json!./../data/day.json');
var weekData = require('json!./../data/week.json');
var monthData = require('json!./../data/month.json');
var seasonData = require('json!./../data/season.json');
var yearData = require('json!./../data/year.json');

/*
 * Component: Dash
 * Desc     : Display table of a elder's activities
 * Params   : null
 */
export default class Dash extends React.Component {
  //set default data source to weekData
  constructor(props){
    super(props);
    this.state = {
      data: weekData
    };
  }
  //get window width and height before render()
  updateDimensions() {
    this.setState({width: $(window).width(), height: $(window).height()});
  }

  componentWillMount() {
    this.updateDimensions();
  }
//listen to window resize event to update window width and height
  componentDidMountf() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
//Update chart immediately after the data source is updated
  componentWillReceiveProps(nextState) {
    this.setState({data: this.state.data});
  }
//change the data source to correspoding file
  showDay() {
    this.setState({ data: dayData});
  }

  showWeek() {
    this.setState({ data: weekData});
  }

  showMonth() {
    this.setState({ data: monthData});
  }

  showSeason() {
    this.setState({ data: seasonData});
  }

  showYear() {
    this.setState({ data: yearData});
  }

  render() {
    //To make every work clear, there is a minixum size of chart and button
    //chart width is 0.9 * window width, chart height is 0.7 * height
    //the minixum chart width is 250px, minixum chart height is 200px
    var chartWidth =
    ((this.state.width * 0.9 > 250) ? this.state.width * 0.9 : 250);
    var chartHeight =
    ((this.state.height * 0.7 >200) ? this.state.height * 0.7 : 200);
    //button width is 0.18 * chartWidth, minixum width 60px, button height is 30px
    var buttonStyle ={
      width: ((chartWidth * 0.18 > 30) ? chartWidth * 0.18 : 30),
      height: 30
    };
    //click button to change the content of chart
    return (
      <div className="ui segment">
        <button className="ui primary button" style={buttonStyle}
          onClick={() => this.showDay()}>D</button>
        <button className="ui primary button" style={buttonStyle}
          onClick={() => this.showWeek()}>W</button>
        <button className="ui primary button" style={buttonStyle}
          onClick={() => this.showMonth()}>M</button>
        <button className="ui primary button" style={buttonStyle}
          onClick={() => this.showSeason()}>S</button>
        <button className="ui primary button" style={buttonStyle}
          onClick={() => this.showYear()}>Y</button>
        <BarChart
        data={this.state.data}
        width={chartWidth}
        height={chartHeight}
        />
      </div>
    );
  }
}
