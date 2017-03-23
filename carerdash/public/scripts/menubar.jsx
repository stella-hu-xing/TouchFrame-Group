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
import CarerManagement from './carermanagement.jsx';
import Network from './network.jsx';
import CarerProfile from './carerprofile.jsx';

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
    };
  }

  // change the page state
  changePage(pageName) {
    // close the sidebar after page changed
    this.toggleSidebar();
    this.setState({page: pageName});
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
      <div style={{paddingTop: 20, height: "100%"}}>
        <div className="ui fixed inverted labeled icon left inline vertical sidebar menu"  >
          <NameBar username="TF - Carer" />
          <Item name="Home" icon="home" onClick={() => this.changePage('home')} />
          <Item name="Dashboard" icon="dashboard" onClick={() => this.changePage('dash')} />
          <Item name="Activity Log" icon="calendar" onClick={() => this.changePage('log')} />
          <Item name="Carer Management" icon="user" onClick={() => this.changePage('carermanagement')} />
          <Item name="Network" icon="user" onClick={() => this.changePage('network')} />
          <Item name="Carer Profile" icon="user"  onClick={() => this.changePage('carerprofile')} />
          </div>
        <div className="dimmed pusher" style={{paddingTop: 20}}>
          <div className="borderless ui fixed main menu">
            <a className="left aligned item" onClick={this.toggleSidebar}>
              <i className="large sidebar icon" />
            </a>
            <a className="item">Touch Frame</a>
            <a className="right aligned item">
              <img className="ui Mini image" src={"images/light"+currentNum+".png"} />
            </a>
          </div>
          <div className="ui basic container" style={{paddingTop: 75}}>
            {(() => {
              switch (this.state.page) {
                case "home":   return <Home />;
                case "dash": return <Dash />;
                case "log":  return <Log />;
                case "carermanagement":  return <CarerManagement />;
                case "network": return <Network goBack={() => this.changePage('home')} />;
                case "carerprofile": return <CarerProfile />;
                default:      return <Home />;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}
