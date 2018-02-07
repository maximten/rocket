import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../../redux/actions/posts'
import Posts from '../../components/Posts';

class PostsContainer extends Component {
  componentDidMount() {
    const { posts: { offset, limit }, fetch } = this.props;
    fetch(offset, limit);
  }
  render() {
    const { posts: { items, fetching }} = this.props;
    return (
      <Posts
      items={items}
      fetching={fetching}
      />
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