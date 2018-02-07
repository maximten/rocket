import React, { Component } from 'react';
import './index.less';

export default class Container extends Component {
  render() {
    return (
      <div className="container-narrow">
        { this.props.children }
      </div>
    );
  }
}