import React from 'react';
import styled from 'styled-components';

import Header from '../Components/Header.js';

import mainImage from '../assets/images/whereswaldo.jpg';

let GameImage = styled.img.attrs((props) => ({
  src: mainImage,
}))`
  overflow: scroll;
  margin-top: 85px;

  @media only screen and (max-width: 650px) {
    & {
      margin-top: 151px;
    }
  }
`;

function Home(props) {
  return (
    <React.Fragment>
      <Header />
      <GameImage />
    </React.Fragment>
  );
}

export default Home;
