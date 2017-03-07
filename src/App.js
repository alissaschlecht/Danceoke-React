import React, { Component } from 'react';
{/*import logo from './logo.svg';*/}
import './App.css';
import Video from './Video';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Title</h2>
        </div>
        <div className='videoContainer'>
          <Video />
          <Video />
          <Video />
        </div>
      </div>
    );
  }
}


export default App;

