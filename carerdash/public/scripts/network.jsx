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
var elders = require('json!./../data/users.json');
global.currentNum = 0;
import Home from './home.jsx';

export default class Network extends React.Component {
    change(i) {
        currentNum = i;
        this.props.goBack();
    }

    render() {
        return (
            <div className="ui segment">
                <h3 className="ui center aligned header">Related Elder People</h3>
                <table className="ui celled table">
                    <thead>
                    <tr>
                        <th colspan="3">
                            Elder List
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{elders[0].REALNAME}</td>
                        <td>{elders[0].EMAIL}</td>
                        <td>
                            <button className="ui primary button" onClick={() => this.change(0)}>Watch</button>
                        </td>
                    </tr>
                    <tr>
                        <td>{elders[1].REALNAME}</td>
                        <td>{elders[1].EMAIL}</td>
                        <td>
                            <button className="ui primary button" onClick={() => this.change(1)}>Watch</button>
                        </td>
                    </tr>
                    <tr>
                        <td>{elders[2].REALNAME}</td>
                        <td>{elders[2].EMAIL}</td>
                        <td>
                            <button className="ui primary button" onClick={() => this.change(2)}>Watch</button>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}
