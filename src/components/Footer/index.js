import React, { Component } from 'react';
import Container from '../Container';
import './index.less';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
            <a href="#">Правила</a>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Контакты</a>
        </Container>
      </footer>
    );
  }
}