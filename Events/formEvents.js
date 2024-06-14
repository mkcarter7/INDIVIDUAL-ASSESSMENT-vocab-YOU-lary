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
        user_id: user
      };
      // this patches the payload object with a firebaseKey and a language
      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getWords(user).then((word) => showWords(word));
        });
      });
    }

    // CLICK EVENT FOR EDITING WORDS
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_id: document.querySelector('#language_id').value,
        time_submitted: Date.now(),
      };

      updateWord(payload, firebaseKey).then(() => {
        getWords(user.uid).then((word) => showWords(word));
      });
    }
  });
};

export default formEvents;
