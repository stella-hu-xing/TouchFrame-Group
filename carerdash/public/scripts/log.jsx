/*
 * Log Component
 * creator: Xing Hu
 */

//import React from 'react'

//data source --from json file
var events = require('json!./../data/events.json');
var elders = require('json!./../data/users.json');
/*
 * Component: Events
 * Desc     : The events list
 * Params   :
 */
//A class to show each event
var Event = React.createClass({
  getInitialState: function () {
    return {
      data : events
    }
  },
  //render fuction: iterate every event in the file
  render:function(){
    var tb = this.state.data.map(function(data){
      return (
        <tr>
          <td>Elder:  {elders[currentNum].REALNAME}</td>
          <td>Event_type:  {data.event_type}</td>
          <td>Event_time:  {data.event_time}</td>
        </tr>
      )
    });

    return (
      <table className="ui celled table">
        <tbody>
          {tb}
        </tbody>
      </table>
    )
  }
});

/*
 * Component: Log
 * Desc     : The activity log
 * Params   :
 */
export default class Log extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data:events
    };
  }
  render() {
    return (
      <div className="ui segment" >
        <h3 className="ui center aligned header">Activity Log</h3>
        <Event data={this.state.data}></Event>
      </div>
    );
  }
}
