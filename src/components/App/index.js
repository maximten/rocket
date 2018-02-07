import React, { Component } from 'react';
import Header from '../Header'
import PostsContainer from '../../containers/PostsContainer'
import Footer from '../Footer'
import './index.less';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <PostsContainer/>
        <Footer/>
      </div>
    );
  }
}