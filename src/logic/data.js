import firebase from '../firebase.js';

let db = firebase.firestore();

async function getCharacters() {
  let characters = await db.collection('characters').get();

  let output = [];
  characters.forEach((character) => {
    let { x, y } = character.data();
    output.push({ name: character.id, coords: { x, y } });
  });

  return output;
}

async function getScores() {
  let highscores = await db.collection('leaderboard').get();

  highscores.forEach((score) => {
    console.log(score.data());
  });
}

function sendScore(name, score) {
  db.collection('leaderboard').add({
    name,
    time: score,
  });
}

export default getCharacters;
export { getScores, sendScore };
