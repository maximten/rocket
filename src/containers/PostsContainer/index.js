import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from '../redux/actions/posts'

class PostsContainer extends Component {
  render() {
    return (
      
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  fetch: (offset, limit) => {
    dispatch(fetch(offset, limit));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);