/*
 * Log Component
 * creator: Xing Hu
 */

//import React from 'react'
import Request from 'superagent';

//data source --from json file
// var events = require('json!./../data/events.json');
// var elders = require('json!./../data/users.json');
/*
 * Component: Events
 * Desc     : The events list
 * Params   :
 */
//A class to show each event
var Event = React.createClass({
  getInitialState: function () {
    return {
      data : [],
      elders: [],
    }
  },

  componentWillMount() {
    var self = this;
    var events_url = touchframeapi_url + "/" + (currentNum+1) + "/events";
    var elders_url = touchframeapi_url + "/allolds";
    Request.get(events_url).then((response) => {
      self.setState({
        data: response.body
      });
    });

    Request.get(elders_url).then((response) => {
      self.setState({
        elders: response.body
      });
    });
  },
  //render fuction: iterate every event in the file
  render:function(){
    var self = this;
    var tb = this.state.data.map(function(data){
      if (self.state.elders.length > 0) {
        return (
            <tr>
              <td>Elder:  {self.state.elders[currentNum].REALNAME}</td>
              <td>Event_type:  {data.event_type}</td>
              <td>Event_time:  {data.event_time}</td>
            </tr>
        );
      } else {
        return;
      }
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
      data:[]
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
