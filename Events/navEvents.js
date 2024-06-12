import { showWords } from '../pages/words';
import { getWords } from '../api/word';
import { signOut } from '../utils/auth';
import addWord from '../components/Form/form';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL WORDS
  document.querySelector('#all-words').addEventListener('click', () => {
    getWords(user).then(showWords);
  });
  document.querySelector('#addWord').addEventListener('click', () => {
    addWord(user);
  });

  document.querySelector('#createbutton').addEventListener('click', () => {
    addWord(user);
  });
};
export default navigationEvents;
