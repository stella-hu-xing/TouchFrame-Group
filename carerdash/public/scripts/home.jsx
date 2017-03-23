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
export default class Home extends React.Component {





  render() {
    return (
      <div className="ui segment">
        <h3 className="ui center aligned header">Home Page</h3>
        
        <div className="ui one column stackable center aligned page grid"
             >
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
                    <h3>{elders[currentNum].REALNAME}</h3>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <div className="ui grid">
                <div className="eight wide column">
                  <p>Age: 66</p>
                </div>
                <div className="six wide column">
                  <p>Relation: Mother</p>
                </div>
              </div>
            </tr>
          </table>
        </div>

      </div>
    );
  }
}
