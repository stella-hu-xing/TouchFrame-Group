/*
 * Home Component
 * creator: Johnny
 */

// subpage - Home
// import React from 'react'

//data sources -- form json file

/*
 * Component: Home
 * Desc     : Home page shows an elder or a carer photo and info
 * Params   :
 */
import Request from 'superagent';

var relationships = ["Mother", "Father", "Uncle", "GrandFather", "GrandFather"];

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      elders: []
    };
  }

  componentWillMount() {
    var elders_url = touchframeapi_url + "/allolds";
    Request.get(elders_url).then((response) => {
      this.setState({
        elders: response.body
      });
    });
  }

  render() {
    if (this.state.elders.length > 0) {
      return (
        <div>
          <h3 className="ui center aligned header">Home Page</h3>
          <div className="ui segment">
            <div className="ui one column stackable center aligned page grid">
              <table className="ui very basic collapsing celled table">
                <tr>
                  <td colSpan="2">
                    <img className="ui Large image"
                      src={"images/elder"+currentNum+".jpg"}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="ui grid">
                      <div className="eight wide column">
                        <h3>Elder</h3>
                      </div>
                      <div className="four wide column">
                        <h3>{this.state.elders[currentNum].REALNAME}</h3>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <div className="ui grid">
                    <div className="eight wide column">
                      <p>Age:  {this.state.elders[currentNum].AGE}</p>
                    </div>
                    <div className="six wide column">
                      <p>Relation: {relationships[currentNum]}</p>
                    </div>
                  </div>
                </tr>
              </table>
            </div>
          </div>
            <h1> &nbsp;</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h3 className="ui center aligned header">Getting data from server ...</h3>
        </div>
      );
    }
  }
}
