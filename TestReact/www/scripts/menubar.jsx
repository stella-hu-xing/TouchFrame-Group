/*
 * Menubar Component
 * creator: Max
 */

// import React from 'react';
// import ReactDOM from 'react-dom';
// import React from 'react'
import Home from './home.jsx';
import Log from './log.jsx';
import Dash from './dash.jsx';
import Connection from './connection.jsx';
import Elder from './elder.jsx';

/*
 * Component: NameBar
 * Desc     : Display the current user's username
 * Params   : username :string
 */
class NameBar extends React.Component {
  render() {
    return <p className="item" > {this.props.username} </p>;
  }
}

/*zai在干嘛哈哈哈
 * Component: Item
 * Desc     : The items in manubar
 * Params   : onClick :function
 *            icon :string
 *            name :string
 */
class Item extends React.Component {
  render() {
    return (
      <a className="item" onClick={this.props.onClick}>
        <i className={this.props.icon + " icon"} ></i>
        {this.props.name}
      </a>
    );
  }
}

/*
 * Component: Menubar
 * Desc     : The slide manubar
 * Params   :   
 */
export default class Menubar extends React.Component {
  // set initial state
  constructor(props){
    super(props);
    this.state = {
      page: 'home',
      color: currentNum
    };
  }

  // change the page state
  changePage(pageName) {
    // close the sidebar after page changed
    // this.toggleSidebar();
    $('.ui.sidebar')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('hide');
    this.setState({page: pageName, color: currentNum});
  }

  // toggle the menubar
  toggleSidebar() {
    // ...to ensure that 'this' refers to the component instance here.
    $('.ui.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle')
    ;
  }


  render() {
    return (
      <div style={{paddingTop: 40, height: "100%"}}>
        <div className="ui fixed inverted labeled icon left inline vertical sidebar menu"  >
          <NameBar username="TF - Carer" />
          <Item name="Home" icon="home" onClick={() => this.changePage('home')} />
          <Item name="Dashboard" icon="dashboard" onClick={() => this.changePage('dash')} />
          <Item name="Activity Log" icon="calendar" onClick={() => this.changePage('log')} />
          <Item name="Connections" icon="user" onClick={() => this.changePage('connection')} />
          <Item name="Elders" icon="user"  onClick={() => this.changePage('elder')} />
          </div>
        <div className="dimmed pusher" >
          <div className="borderless ui fixed main menu" style={{paddingTop: 10}}>
            <a className="left aligned item" onClick={this.toggleSidebar}>
              <i className="large sidebar icon" />
            </a>
            <a className="item">Touch Frame</a>
            <a className="right aligned item">

              {(() => {
                switch (this.state.color) {
                  case 0:
                    return <img className="ui Mini image" src={"images/light0.png"} />;
                  case 1:
                    return <img className="ui Mini image" src={"images/light1.png"} />;
                  case 2:
                    return <img className="ui Mini image" src={"images/light2.png"} />;
                  default:
                    return <img className="ui Mini image" src={"images/light0.png"} />;
                }
              })()}
            </a>
          </div>
          <div className="ui basic container" style={{paddingTop: 50}}>
            {(() => {
              switch (this.state.page) {
                case "home":   return <Home />;
                case "dash": return <Dash pusher={this.props.pusher} />;
                case "log":  return <Log />;
                case "connection":  return <Connection />;
                case "elder": return <Elder changeColor={() => this.setState({color: currentNum})} goHome={() => this.changePage('home')} />;
                default:      return <Home />;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}
