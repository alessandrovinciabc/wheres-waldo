import React from 'react';

import styled from 'styled-components';

import waldo from '../assets/images/waldo.png';

let Container = styled.div`
  background-color: #212b44;
  height: 4rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;
`;

let Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

let Logo = styled.img.attrs((props) => ({
  src: waldo,
}))`
  height: 50px;
`;

let Character = {};
Character.Medal = styled.div`
  background: ${(props) => props.img || 'white'};

  height: 50px;
  width: 50px;

  border-radius: 100%;
`;

Character.Display = styled.div``;

function Header(props) {
  return (
    <Container>
      <Title>
        Where's Waldo?
        <Logo />
      </Title>
    </Container>
  );
}

export default Header;
