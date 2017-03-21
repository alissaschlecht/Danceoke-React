import React, { Component } from 'react';

import '../stylesheets/App.css';
import Video from './Video';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
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

