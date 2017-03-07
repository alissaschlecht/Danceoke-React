import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';


class Video extends Component {
  render() {
    return (
      <div className="videoContainer">
        <Row className="videoRow">
          <Col xs={12} md={4} >{'one'}</Col>
          <Col xs={12} md={4} >{'two'} </Col>
          <Col xs={12} md={4} >{'three'} </Col>
        </Row>
      </div>
    );
  }
}


export default Video;