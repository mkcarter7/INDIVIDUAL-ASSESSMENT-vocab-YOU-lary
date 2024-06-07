import { showWords } from '../pages/words';
import getWords from '../api/word';
import signOut from '../utils/auth';
// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL WORDS
  document.querySelector('#all-books').addEventListener('click', () => {
    getWords().then(showWords);
  });
};
export default navigationEvents;
