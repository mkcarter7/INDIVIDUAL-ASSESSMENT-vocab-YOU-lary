import { showWords } from '../pages/words';
import {
  createWord, getWords, updateWord, getSingleWord
} from '../api/word';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A WORD
    if (e.target.id.includes('submit-word')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('language').value,
      };
      // this patches the payload object with a firebaseKey and a language
      createWord(payload).then(({ name }) => {
        getSingleWord(payload.language_id).then((language) => {
          const patchPayload = { firebaseKey: name, language: language.name };
          updateWord(patchPayload).then(() => {
            getWords(user).then(showWords);
          });
        });
      });
    }

    // CLICK EVENT FOR EDITING WORDS
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        definition: document.querySelector('#definition').value,
        language_id: document.querySelector('#language_id').value,
        time_submitted: Date.now(),
        title: document.querySelector('#word').value,
        firebaseKey,
      };

      updateWord(payload).then(() => {
        getWords(user.uid).then((vocab) => showWords(vocab));
      });
    }
  });
};

export default formEvents;
