import React from 'react';

import styled from 'styled-components';

import waldo from '../assets/images/waldo.png';
import fry from '../assets/images/fry.png';
import deadpool from '../assets/images/deadpool.png';

let Container = styled.div`
  background-color: #212b44;
  padding: 1rem 2rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 650px) {
    & {
      flex-direction: column;
    }
  }
`;

let Character = styled.div`
  background: ${(props) => (props.img ? `url(${props.img})` : 'white')};
  background-color: white;
  background-size: cover;

  height: 50px;
  width: 50px;

  border-radius: 100%;

  margin: 0 5px;
  border: 2px solid white;

  &::after {
    content: ${(props) => (props.checked ? "''" : 'none')};
    display: block;
    height: 100%;
    width: 100%;
    background-color: #ee3c3c;
    border-radius: 100%;

    opacity: 0.8;
  }
`;

Character.Display = styled.div`
  display: flex;
`;

let Score = styled.div`
  background-color: #212b44;
  padding: 5px;

  font-size: 2rem;
`;

let RestartButton = styled.button`
  height: 3rem;
  width: 10rem;

  background-color: #ee3c3c;
  color: white;
  font-size: 1.2rem;

  border-radius: 5px;
  border: none;
  outline: none;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

function Header(props) {
  return (
    <Container>
      <Character.Display>
        <Character img={waldo} checked />
        <Character img={deadpool} />
        <Character img={fry} />
      </Character.Display>
      <Score>00:00:00</Score>
      <RestartButton>Restart</RestartButton>
    </Container>
  );
}

export default Header;
