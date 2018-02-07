import React, { Component } from 'react';
import Container from '../Container';
import './index.less';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <a className="logo" href="/">
            <span>Rocket</span>
            <i className="fas fa-rocket"></i>
          </a>
        </Container>
      </header>
    );
  }
}