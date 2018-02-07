import React, { Component } from 'react';
import Comments from '../Comments';
import './index.less';

export default class Post extends Component {
  render() {
    const { post: { title, content }, comments, fetch } = this.props;
    return (
      <div className="post">
        <h1>{ title }</h1>
        <p>{ content }</p>
        {
          comments &&
          <Comments
          items={comments}
          fetch={fetch}
          />
        }
      </div>
    );
  }
}