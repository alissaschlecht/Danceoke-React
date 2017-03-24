import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Row, Col } from 'react-bootstrap';

class Video extends Component {
  render() {
    return (
      <div className="videoContainer">
        <Row className="videoRow">
          <Col xs={12} md={3} mdOffset={1}>
            <iframe 
              id="ytplayer" 
              type="text/html" 
              width="250" 
              height="150"
              src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
              >
            </iframe>
          </Col>
          <Col xs={12} md={3} mdOffset={1} >
            <iframe 
              id="ytplayer" 
              type="text/html" 
              width="250" 
              height="150"
              src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
              >
            </iframe>
          </Col>
          <Col xs={12} md={3} mdOffset={1} >
            <iframe 
              id="ytplayer" 
              type="text/html" 
              width="250" 
              height="150"
              src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
              >
            </iframe>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Video;