import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from '../Components/Header.js';

import mainImage from '../assets/images/whereswaldo.jpg';

import isInsideTargetBox from '../logic/target.js';

import getCharacters from '../logic/fetchData.js';

import ReactModal from 'react-modal';
import { useTimer } from 'use-timer';

import Button from '../Components/Button.js';

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

  let [won, setWon] = useState(false);
  let [startGameModal, setStartGameModal] = useState(true);

  const { time, start, pause, reset } = useTimer();

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

  useEffect(() => {
    if (characters.length === 0) return;
    if (characters.every((el) => el.found === true)) {
      setWon(true);
      pause();
    }
  }, [characters, pause]);

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

  let handleGameStart = () => {
    setStartGameModal(false);
    start();
  };

  let modalStyle = {
    content: {
      height: '184px',
      width: '320px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'black',
      fontSize: '1.2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <React.Fragment>
      <Header characters={characters} time={time} />
      <GameImage data-testid="gameImage" onClick={handleClick} />
      {showTarget ? (
        <TargetBox data-testid="targetBox" pos={targetPos} />
      ) : null}
      <ReactModal isOpen={won} ariaHideApp={false} style={modalStyle}>
        You won!
      </ReactModal>
      <ReactModal
        isOpen={startGameModal}
        ariaHideApp={false}
        style={modalStyle}
      >
        <Button onClick={handleGameStart}>Play now</Button>
      </ReactModal>
    </React.Fragment>
  );
}

export default Home;
