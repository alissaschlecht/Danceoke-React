import React, { Component } from 'react';
import '../stylesheets/App.css';
import Video from './Video';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <div>
            <Video />
            <Video />
            <Video />
          </div>
        </Content>
      </Layout>
    </Layout>
    );
  }
}


export default App;

