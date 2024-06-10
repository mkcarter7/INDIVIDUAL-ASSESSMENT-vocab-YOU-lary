import { getWords, deleteWord, createWord, getSingleWord } from '../api/word';
import { showWords } from '../pages/words';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card-btn')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE CARD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteWord(firebaseKey).then(() => {
          getWords().then(showWords);
        });
      }
    }

    if (e.target.id.includes('add-card-btn')) {
      createWord();
      console.warn('ADD CARD');
    }

    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((bookObj) => createWord(bookObj));
      console.warn('EDIT WORD', e.target.id);
    }
  });
};

export default domEvents;
