import { showWords } from '../pages/words';
import { getWords } from '../api/word';
import { signOut } from '../utils/auth';
import addWord from '../components/Form/form';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  console.warn(user.uid);
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL WORDS is Vocabulary in the navbar
  document.querySelector('#all-words').addEventListener('click', () => {
    getWords(user.uid).then(showWords);
  });
  document.querySelector('#add-word-btn').addEventListener('click', () => {
    addWord(user.uid);
  });
  document.querySelector('#edit-word-btn').addEventListener('click', () => {
    addWord(user.uid);
  });

  // document.querySelector('#createbutton').addEventListener('click', () => {
  //   createWord(user.uid);
  // });
// #TODO add back after creation of filter button
  // document.querySelector('#filter').addEventListener('click', () => {
  //   filter().then(showWords);
  // });
};

export default navigationEvents;
