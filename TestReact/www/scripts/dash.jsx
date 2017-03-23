/*
 * Dash Component
 * creator: Dan
 */

//import React from 'react'
//var React = require('react');
//import d3 from 'd3';
// import rd3 from 'rd3';
import Request from 'superagent';

var BarChart = rd3.BarChart;

/*
 * Component: Dash
 * Desc     : Display table of a elder's activities
 * Params   : null
 */



export default class Dash extends React.Component {


  //set default data source to dayData
  constructor(props){
    super(props);
    this.state = {
      data: [],
      dayData: [],
      weekData: [],
      monthData: [],
      yearData: [],
      color: 0
    };
  }
  //get window width and height before render()
  updateDimensions() {
    this.setState({width: $(window).width(), height: $(window).height()});
  }

  componentWillMount() {
    var pusher = this.props.pusher;
    var channel = pusher.subscribe('test_channel');
    var self = this;
    channel.bind('activity', function(data) {
      if (currentNum == (data.id - 1)) {
        var newData = {};
        newData[data.type + 'Data'] = data.new;
        self.setState(newData);
        if ((data.type === 'day' && self.state.color === 0) ||
          (data.type === 'week' && self.state.color === 1) ||
          (data.type === 'month' && self.state.color === 2 ) ||
          (data.type === 'year' && self.state.color === 3)
        ) {
          self.setState({
            data: data.new
          });
        }
      }
    });

    var data_url = touchframeapi_url + "/" + (currentNum + 1) + "/data";
    Request.get(data_url).then((response) => {
      this.setState({
        data: response.body.day,
        dayData: response.body.day,
        weekData: response.body.week,
        monthData: response.body.month,
        yearData: response.body.year
      });
    });

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
    this.setState({ data: this.state.dayData,color: 0});
  }

  showWeek() {
    this.setState({ data: this.state.weekData, color: 1});
  }

  showMonth() {
    this.setState({ data: this.state.monthData, color: 2});
  }


  showYear() {
    this.setState({ data: this.state.yearData, color: 3});
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
        <div><h3 className="ui center aligned header">Dashboard</h3>
      <div className="ui segment">

         <div className="ui grid">
        {(() => {
          if (this.state.color == 0) {
             return <div className="four wide column"> <button className="ui green button" style={buttonStyle}
                    onClick={() => this.showDay()}>Day</button></div>
          } else {
            return <div className="four wide column"><button className="ui primary button" style={buttonStyle}
                    onClick={() => this.showDay()}>Day</button></div>
          }
        })()}

        {(() => {
          if (this.state.color == 1) {
            return <div className="four wide column"><button className="ui green button" style={buttonStyle}
                    onClick={() => this.showWeek()}>Week</button></div>
          } else {
            return  <div className="four wide column"><button className="ui primary button" style={buttonStyle}
                    onClick={() => this.showWeek()}>Week</button></div>
          }
        })()}
        {(() => {
          if (this.state.color == 2) {
            return <div className="four wide column"><button className="ui green button" style={buttonStyle}
                    onClick={() => this.showMonth()}>Month</button></div>
          } else {
            return <div className="four wide column"><button className="ui primary button" style={buttonStyle}
                    onClick={() => this.showMonth()}>Month</button></div>
          }
        })()}
        {(() => {
          if (this.state.color == 3) {
            return <div className="four wide column"> <button className="ui green button" style={buttonStyle}
                    onClick={() => this.showYear()}>Year</button></div>
          } else {
            return <div className="four wide column"> <button className="ui primary button" style={buttonStyle}
                    onClick={() => this.showYear()}>Year</button></div>
          }
        })()}
           </div>

        <BarChart
        data={this.state.data}
        width={chartWidth}
        height={chartHeight}
        />

        {(() => {
          if (this.state.color == 1) {
            return   <a className="ui primary button" href="mailto:leonss@unimelb.edu.au?Subject=Weekly%20Health%20Condition&body=Weekly%20Health%20Condition%20%20%20:%20%20https://api.touchframe.xyz/pictures/download/demo-week.png"> Share</a>
          }
          if (this.state.color== 2){
            return   <a className="ui primary button" href="mailto:xinghu0164@gmail.com?Subject=Weekly%20Health%20Condition&body=Weekly%20Health%20Condition%20%20%20:%20%20https://api.touchframe.xyz/pictures/download/demo-month.png"> Share</a>
          }else{
            return  <a className="ui primary button" href="mailto:xinghu0164@gmail.com?Subject=Hello%20againco&"> Share</a>
          }
        })()}

      </div>
          </div>
    );
  }
}
