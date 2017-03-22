import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Input } from 'antd'
const Search = Input.Search;


class Search_Videos extends Component {
  render() {
    return (
      <div>
        <Search
          placeholder="input search text"
          style={{ width: 200 }}
          onSearch={value => console.log(value)}
        />
      </div>
    );
  }
}

export default Search_Videos;