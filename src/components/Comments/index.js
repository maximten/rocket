import React, { Component } from 'react';
import _ from 'lodash';
import scrollToElement from 'scroll-to-element';
import './index.less';

export default class Comments extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(newProps) {
    const { items } = this.props;
    if (newProps.items.length !== this.props.items.length) {
      scrollToElement(this.refs.more, {
        offset: -300,
        ease: 'out-quad',
        duration: 1000
      });
    }
  }
  render() {
    const { items, fetch } = this.props;
    const colors = ['#06d6a0', '#ef476f', '#ffc43d', '#1b9aaa'];
    return (
      <div className="comments">
        {
          _.map(items, (item, key) => {
            const { name, content } = item;
            const color = colors[key % colors.length];
            return (
              <div key={key} className="comment">
                <div className="left">
                  <div className="circle" style={{
                    backgroundColor: color
                  }}></div>
                </div>
                <div className="right">
                  <h4>{ name }</h4>
                  <p>{ content }</p>
                </div>
              </div>
            );
          })
        }
        <a href="#" ref="more" onClick={(e) => {
          e.preventDefault();
          fetch();
        }}>More</a>
      </div>
    );
  }
}