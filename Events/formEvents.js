import { createWord, getWords, updateWord } from '../api/word';
import { showWords } from '../pages/words';

const formEvents = (user) => {
  console.warn(user);
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const payload = {
        title: document.querySelector('#word').value,
        description: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
      };

      createWord(payload, user.uid).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getWords(user.uid).then(showWords);
        });
      });
      console.warn('CLICKED SUBMIT WORD', e.target.id);
    }
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        firebaseKey,
      };

      updateWord(payload).then(() => {
        getWords().then(showWords);
      });
    }
  });
};

export default formEvents;
