import React, { Component } from 'react';
import './index.less';

export default class Comments extends Component {
  render() {
    const { items } = this.props;
    const colors = ['#06d6a0', '#ef476f', '#ffc43d', '#1b9aaa'];
    return (
      <div className="comments">
        {
          items.map((item, key) => {
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
      </div>
    );
  }
}