/*
 * CarerManagement Component
 * creator: Dylan
 */

// import React from 'react'

/*
 * Component: CarerManagement
 * Desc     : The carer management page
 * Params   : null
 */
export default class CarerManagement extends React.Component {
  show() {
    $('.ui.modal').modal('show');
  }
  render() {
    return (
      <div className="ui segment">
        <h3 className="ui center aligned header">Carer Management</h3>
        <table className="ui celled table">
          <thead>
            <tr>
              <th colspan="3">
                Carer List
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Lilki</td>
              <td>Level 2</td>
              <td>Son</td>
              <td>
                <button className="ui primary button" onClick={() => this.show()}>Change Level</button>
                <div className="ui modal">
                  <i className="close icon"></i>
                  <div className="header">
                    change level
                  </div>
                  <div className="image content">
                    <div className="ui medium image">
                      <img src="images/carer.jpg"></img>
                    </div>
                    <div className="description">
                      <p>Current Level : Level 2</p>
                      <p>Relation: Son</p>
                    </div>
                  </div>
                  <div className="actions">
                    <div className="ui positive right labeled icon button">
                      Change Up
                    </div>
                    <div className="ui positive right labeled icon button">
                      Change Down
                    </div>
                    <div className="ui black deny button">
                      Cancel
                    </div>
                  </div>
                </div>

              </td>
            </tr>
            <tr>
              <td>Jamie Harington</td>
              <td>Level 2</td>
              <td>Nephew</td>
              <td>
                <button className="ui primary button" onClick={() => this.show()}>Change Level</button>
              </td>
            </tr>
            <tr>
              <td>Jill Lewis</td>
              <td>Level 3</td>
              <td>Son</td>
              <td>
                <button className="ui primary button" onClick={() => this.show()}>Change Level</button>
              </td>
            </tr>
            <tr>
              <td>Mary Lee</td>
              <td>Level 3</td>
              <td>Daughter</td>
              <td>
                <button className="ui primary button" onClick={() => this.show()}>Change Level</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
