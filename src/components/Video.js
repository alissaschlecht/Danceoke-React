import React, { Component } from 'react';
import '../stylesheets/App.css';
import { Row, Col } from 'antd';


class Video extends Component {
  render() {
    return (
      <div className="videoContainer">
        <Row  type="flex" justify="space-around">
          <Col span={6} >{'one'}</Col>
          <Col span={6} >{'two'} </Col>
          <Col span={6} >{'three'} </Col>
        </Row>
      </div>
    );
  }
}

export default Video;