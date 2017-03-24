import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class SearchVideos extends Component {
  render() {
    return (
      <div>
        <h1 className='homeTitle'> Danceoke</h1>
        <h2 className='homeSubTitle'>Like singing, but... dancing</h2> 
        <Form className='searchVideos'>
          <FormGroup>
            <FormControl type="text" placeholder="Search for video..." />
          </FormGroup>
          {' '}
          <Button type="submit">Search</Button>
        </Form>
      </div>
    );
  }
}

export default SearchVideos;