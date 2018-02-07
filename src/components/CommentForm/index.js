import React, { Component } from 'react';
import 'formdata-polyfill';
import _ from 'lodash';
import classNames from 'classnames';
import './index.less';
import { error } from 'util';

export default class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {
        name: false,
        content: false
      }
    };
  }
  submit = (e) => {
    e.preventDefault();
    const { postId, add } = this.props;
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const content = formData.get('content');
    const errors = {
      name: !name,
      content: !content
    };
    const errorsCount = _.reduce(errors, (carry, item) => { 
      return carry + item;
    }, 0);
    this.setState({ errors })
    if (!errorsCount) {
      add(postId, name, content);
    }
  }
  render() {
    const { errors } = this.state;
    const nameFormClass = classNames("form-group", { "has-error": errors.name });
    const contentFormClass = classNames("form-group", { "has-error": errors.content });
    return (
      <form className="comment-form" onSubmit={this.submit}>
        <div className="left">
          <button className="circle">
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="right">
          <div className={ nameFormClass }>
            <input name="name" type="text" placeholder="Name"/>
          </div>
          <div className={ contentFormClass }>
            <input name="content" placeholder="Message"/>
          </div>
        </div>
      </form>
    );
  }
}