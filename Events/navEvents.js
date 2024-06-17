import { showWords } from '../pages/words';
import { createWord, getWords } from '../api/word';
import { signOut } from '../utils/auth';
import addWord from '../components/Form/form';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL WORDS
  document.querySelector('#all-words').addEventListener('click', () => {
    getWords(user.uid).then(showWords);
  });
  document.querySelector('#add-word-btn').addEventListener('click', () => {
    addWord();
  });
  document.querySelector('#edit-word-btn').addEventListener('click', () => {
    addWord();
  });

  document.querySelector('#createbutton').addEventListener('click', () => {
    createWord();
  });
};

export default navigationEvents;
