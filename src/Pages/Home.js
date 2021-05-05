import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from '../Components/Header.js';

import mainImage from '../assets/images/whereswaldo.jpg';

import isInsideTargetBox from '../logic/target.js';

import getCharacters from '../logic/fetchData.js';

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
  let [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  let [characters, setCharacters] = useState([]);

  useEffect(() => {
    let getDataAndSetState = async () => {
      let characters = await getCharacters();
      let charactersWithFoundProp = characters.map((char) => ({
        ...char,
        found: false,
      }));
      setCharacters(charactersWithFoundProp);
    };

    getDataAndSetState();
  }, []);

  let handleClick = (e) => {
    let { offsetX, offsetY, pageX, pageY } = e.nativeEvent;
    setShowTarget(true);
    setTargetPos({ x: pageX, y: pageY });

    let found = characters.filter((character) => {
      let result = isInsideTargetBox(character.coords, targetSize / 2, {
        x: offsetX,
        y: offsetY,
      });

      return result;
    });

    if (found.length > 0) {
      setCharacters((prev) => {
        let copy = prev.slice();
        let foundMatch = copy.findIndex((el) => el.name === found[0].name);

        if (foundMatch !== -1) {
          copy[foundMatch].found = true;
          return copy;
        } else return prev;
      });
    }
  };

  return (
    <React.Fragment>
      <Header characters={characters} />
      <GameImage data-testid="gameImage" onClick={handleClick} />
      {showTarget ? (
        <TargetBox data-testid="targetBox" pos={targetPos} />
      ) : null}
    </React.Fragment>
  );
}

export default Home;
