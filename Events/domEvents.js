import { getWords, deleteWord, getSingleWord } from '../api/word';
import { showWords } from '../pages/words';
import addWord from '../components/Form/form';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteWord(firebaseKey).then(() => {
          getWords(user).then((word) => showWords(word));
        });
      }
    }
    // ADD WORD EVENT LISTENER
    if (e.target.id.includes('add-word-btn')) {
      addWord();
    }
    // CLICK EVENT FOR EDITING/UPDATING A WORD
    if (e.target.id.includes('edit-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((wordObject) => addWord(wordObject));
    }
  });
};

export default domEvents;
