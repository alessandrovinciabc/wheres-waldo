import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getScores } from '../logic/data.js';

import Button from '../Components/Button.js';

let ScoreDisplay = styled.div`
  margin: 2rem 0;
`;

let ScoreEntry = styled.div`
  background-color: white;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;

  width: 320px;

  color: black;

  text-align: center;
  font-weight: bold;

  font-size: 1.2rem;
`;

let Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Leaderboard(props) {
  let [scores, setScores] = useState([]);

  useEffect(() => {
    getScores((scores) => {
      setScores(scores);
    });
  }, []);

  return (
    <>
      <Container>
        <h1>Leaderboard</h1>
        <ScoreDisplay>
          {scores.length > 0
            ? scores.map((score, index) => (
                <ScoreEntry key={index}>
                  {index + 1}. {score.name}: {score.time}s
                </ScoreEntry>
              ))
            : null}
        </ScoreDisplay>
        <Button
          onClick={() => {
            props.history.push('/');
          }}
        >
          Go Back
        </Button>
      </Container>
    </>
  );
}

export default Leaderboard;
