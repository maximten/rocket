import React, { Component } from 'react';
import PostContainer from '../../containers/PostContainer';
import './index.less';

export default class Posts extends Component {
  render() {
    const { items, fetching } = this.props;
    return (
      <div className="posts">
        {
          items.map((item, key) => {
            return (
              <PostContainer 
              key={key}
              post={item}
              />
            );
          })
        }
      </div>
    );
  }
}