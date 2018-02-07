import React, { Component } from 'react';
import PostContainer from '../../containers/PostContainer';
import ContainerNarrow from '../ContainerNarrow';
import './index.less';

export default class Posts extends Component {
  render() {
    const { items, fetching } = this.props;
    return (
      <div className="posts">
        <ContainerNarrow>
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
        </ContainerNarrow>
      </div>
    );
  }
}