// import React from 'react';
// import ReactDOM from 'react-dom';
// import React from 'react'
// import ReactDOM from 'react-dom'
class TestHeader extends React.Component {
  render() {
    return (<h3 className="ui center aligned header" >Hello {this.props.name}</h3>);
  }
}

ReactDOM.render(<TestHeader name="Max" />, document.getElementById('content'));
