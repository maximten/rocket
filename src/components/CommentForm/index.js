import React, { Component } from 'react';
import './index.less';

export default class CommentForm extends Component {
  render() {
    return (
      <form className="comment-form">
        <div className="left">
          <button className="circle">
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="right">
          <div className="form-group">
            <input id="name" type="text" placeholder="Name"/>
          </div>
          <div className="form-group">
            <textarea name="" id="" cols="30" rows="1" placeholder="Message"></textarea>
          </div>
        </div>
      </form>
    );
  }
}