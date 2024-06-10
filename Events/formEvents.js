import { createWord, getWords, updateWord } from '../api/word';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A WORD
    if (e.target.id.includes('submit-word')) {
      console.warn('CLICKED SUBMIT WORD', e.target.id);
    }

    // CLICK EVENT FOR EDITING A WORD
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED UPDATE WORD', e.target.id);
      console.warn(firebaseKey);
    }
  });
};
export default formEvents;
