import React, { Component } from 'react';
import '../stylesheets/App.css';
import Video from './Video';
import Search_Videos from './search_existing_videos';
import Header_Nav from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header_Nav />
      </div>
    );
  }
}

export default App;

