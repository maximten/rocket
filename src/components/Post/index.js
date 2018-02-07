import React, { Component } from 'react';
import Comments from '../Comments';
import CommentForm from '../CommentForm';
import './index.less';

export default class Post extends Component {
  render() {
    const { post: { id, title, content }, comments, commentsFetching, fetch, addComment } = this.props;
    return (
      <div className="post">
        <h1>{ title }</h1>
        <p>{ content }</p>
        {
          comments &&
          <Comments
            items={comments}
            fetching={commentsFetching}
            fetch={fetch}
          />
        }
        <CommentForm
          add={addComment}
          postId={id}
        />
      </div>
    );
  }
}