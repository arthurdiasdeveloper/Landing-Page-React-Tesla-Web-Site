import React from 'react';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header >
      <Footer>
        <ul>
          <li>
            <a href='#'>UI Clone</a>
          </li>
          <li>
            <a href='#'>Made with love</a>
          </li>
          <li>
            <a href='#'> by Arthur Dias</a>
          </li>
        </ul>
      </Footer >
    </Container>
  );
};

export default UniqueOverlay;
