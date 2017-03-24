import React, { Component } from 'react';
import '../stylesheets/App.css';
import Video from './Video';
import SearchVideos from './Search';
import Navigation from './Navigation';

class App extends Component {

  render() {
    return (
      <div >
        <Navigation />
        <SearchVideos />
        <Video />
      </div>
    );
  }
}

export default App;

