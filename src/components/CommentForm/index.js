import React, { Component } from 'react';
import 'formdata-polyfill';
import './index.less';

export default class CommentForm extends Component {
  submit = (e) => {
    e.preventDefault();
    const { postId, add } = this.props;
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const content = formData.get('message');
    add(postId, name, content);
  }
  render() {
    return (
      <form className="comment-form" onSubmit={this.submit}>
        <div className="left">
          <button className="circle">
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="right">
          <div className="form-group">
            <input name="name" type="text" placeholder="Name"/>
          </div>
          <div className="form-group">
            <input name="message" placeholder="Message"/>
          </div>
        </div>
      </form>
    );
  }
}