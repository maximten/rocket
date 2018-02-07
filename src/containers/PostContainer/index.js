import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../../redux/actions/comments'
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
    const { post, comments: { items } } = this.props;
    const comments = items[post.id];
    return (
      <Post
      post={post}
      comments={comments}
      fetch={this.fetch}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);