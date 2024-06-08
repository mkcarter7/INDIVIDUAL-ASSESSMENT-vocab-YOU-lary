import { getWords, deleteWord } from '../api/word';
import { showWords } from '../pages/words';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // //  CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-word')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteWord(firebaseKey).then(() => {
          getWords().then(showWords);
        });
      }
    }
    // CLICK EVENT FOR SHOWING FORM FOR ADDING A WORD
    if (e.target.id.includes('add-WORD-btn')) {
      console.warn('ADD WORD');
    }

    // // CLICK EVENT EDITING/UPDATING A WORD
    if (e.target.id.includes('edit-word-btn')) {
      console.warn('EDIT WORD', e.target.id);
      console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((wordObj) => addWordForm(wordObj));
    }

    // CLICK EVENT FOR VIEW WORD DETAILS
    if (e.target.id.includes('view-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getWordDetails(firebaseKey).then(viewWord);
    }
    // ADD CLICK EVENT FOR DELETING AN WORD
    if (e.target.id.includes('delete-word')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
      }
    }

    //  CLICK EVENT FOR SHOWING FORM FOR ADDING AN WORDS
    if (e.target.id.includes('add-words-btn')) {
      console.warn('ADD WORD');
    }
  });
  // ADD CLICK EVENT FOR EDITING WORDS
    if (e.target.id.includes('delete-words-btn')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

      deleteWordsRelationship(firebaseKey).then(() => {
        getWords().then(showWords))};
      };
export default domEvents;
