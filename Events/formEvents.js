import { showWords } from '../pages/words';
import { createWord, getWords, updateWord } from '../api/word';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A WORD
    if (e.target.id.includes('submit-word')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
      };
      // this patches the payload object with a firebaseKey and a language
      createWord(payload, user.uid).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getWords(user.uid).then((showWords));
        });
      });
    }

    // CLICK EVENT FOR EDITING WORDS
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
      };

      updateWord(payload, firebaseKey).then(() => {
        getWords(user).then(showWords);
      });
    }
  });
};

export default formEvents;
