import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../Components/Header.js';

import mainImage from '../assets/images/whereswaldo.jpg';

let GameImage = styled.img.attrs((props) => ({
  src: mainImage,
  draggable: false,
}))`
  overflow: scroll;
  margin-top: 85px;

  @media only screen and (max-width: 650px) {
    & {
      margin-top: 151px;
    }
  }
`;

let TargetBox = styled.div`
  position: absolute;
  top: ${(props) => props.pos.y - 40}px;
  left: ${(props) => props.pos.x - 40}px;
  border: 3px solid white;
  background: transparent;
  height: 80px;
  width: 80px;
`;

function Home(props) {
  let [showTarget, setShowTarget] = useState(false);
  let [target, setTarget] = useState({ x: 0, y: 0 });
  let [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  let handleClick = (e) => {
    let { offsetX, offsetY, pageX, pageY } = e.nativeEvent;
    setShowTarget(true);
    setTargetPos({ x: pageX, y: pageY });
    setTarget({ x: offsetX, y: offsetY });

    console.log(offsetX, offsetY);
  };

  return (
    <React.Fragment>
      <Header />
      <GameImage data-testid="gameImage" onClick={handleClick} />
      {showTarget ? (
        <TargetBox data-testid="targetBox" pos={targetPos} />
      ) : null}
    </React.Fragment>
  );
}

export default Home;
