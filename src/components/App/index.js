import React, { Component } from 'react';
import Header from '../Header'
import Content from '../Content'
import PostsContainer from '../../containers/PostsContainer'
import Footer from '../Footer'
import './index.less';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <Content>
          <PostsContainer/>
        </Content>
        <Footer/>
      </div>
    );
  }
}