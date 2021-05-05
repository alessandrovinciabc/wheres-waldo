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

export default getCharacters;
