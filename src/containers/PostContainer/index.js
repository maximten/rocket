import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch, add } from '../../redux/actions/comments'
import Post from '../../components/Post';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 5,
    };
  }
  fetch = () => {
    const { post: { id } , fetch } = this.props;
    const { offset, limit } = this.state;
    fetch(id, offset, limit);
    this.setState({ offset: offset + limit });
  }
  componentDidMount() {
    this.fetch();
  }
  render() {
    const { post, comments: { items, fetching }, add } = this.props;
    const comments = items[post.id];
    const commentsFetching = fetching[post.id];
    return (
      <Post
        post={post}
        comments={comments}
        commentsFetching={commentsFetching}
        fetch={this.fetch}
        addComment={add}
      />
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
  fetch: (postId, offset, limit) => {
    dispatch(fetch(postId, offset, limit));
  },
  add: (postId, name, content) => {
    dispatch(add(postId, name, content));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);