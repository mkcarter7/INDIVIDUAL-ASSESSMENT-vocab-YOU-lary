import { getWords, deleteWord, getSingleWord } from '../api/word';
import { showWords } from '../pages/words';
import addWord from '../components/Form/form';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A VOCAB CARD
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteWord(firebaseKey).then(() => {
          getWords(user).then(showWords);
        });
      }
    }

    // CLICK EVENT FOR EDITING/UPDATING A VOCAB CARD
    if (e.target.id.includes('edit-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((vocabObject) => addWord(user, vocabObject));
      getSingleWord(firebaseKey).then(addWord(user));
    }

    // CLICK EVENT FOR SHOWING ALL CARDS
    if (e.target.id.includes('all-cards-btn')) {
      getWords(user).then((word) => getWords(word));
    }
  });
};

export default domEvents;
