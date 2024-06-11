import { showWords } from '../pages/words';
import { getWords } from '../api/word';
import signOut from '../utils/auth';
import addWord from '../components/Form/form';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL WORDS
  document.querySelector('#all-words').addEventListener('click', () => {
    getWords().then(showWords);
  });
  document.querySelector('#add-entry').addEventListener('click', () => {
    addWord();
  });
};
export default navigationEvents;
