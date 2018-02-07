import React, { Component } from 'react';
import Container from '../Container';
import './index.less';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">About</a>
        </Container>
      </footer>
    );
  }
}