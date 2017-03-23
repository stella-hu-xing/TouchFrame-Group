/*
 * Main file connect all components
 * creator: Max
 */

// import React from 'react'
// import ReactDOM from 'react-dom'
import Menubar from './menubar.jsx';
import Pusher from 'pusher-js';
global.touchframeapi_url = "https://api.touchframe.xyz";
global.currentNum = 0;
var pusher = new Pusher('54c49563766b8f0a752a', {
  cluster: 'ap1',
  encrypted: true
});

ReactDOM.render(
  <Menubar pusher={pusher} />,
  document.getElementById('content')
);
