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

const targetSize = 80; //px

let TargetBox = styled.div`
  position: absolute;
  top: ${(props) => props.pos.y - targetSize / 2}px;
  left: ${(props) => props.pos.x - targetSize / 2}px;
  border: 3px solid white;
  background: transparent;
  height: ${(props) => targetSize}px;
  width: ${(props) => targetSize}px;
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
