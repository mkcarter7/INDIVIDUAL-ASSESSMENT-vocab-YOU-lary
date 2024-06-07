const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE WORD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteWord(firebaseKey).then(() => {
          getWords().then(showWords);
        });
      }
    }
    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A WORD
    if (e.target.id.includes('add-WORD-btn')) {
      console.warn('ADD WORD');
    }

    // TODO: CLICK EVENT EDITING/UPDATING A WORD
    if (e.target.id.includes('edit-word-btn')) {
      console.warn('EDIT WORD', e.target.id);
      console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((wordObj) => addWordForm(wordObj));
    }

    // TODO: CLICK EVENT FOR VIEW WORD DETAILS
    if (e.target.id.includes('view-word-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getWordDetails(firebaseKey).then(viewWord);
    }
    // FIXME: ADD CLICK EVENT FOR DELETING AN WORD
    if (e.target.id.includes('delete-author')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE AUTHOR', e.target.id);
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      console.warn('ADD AUTHOR');
    }
  });
  // FIXME: ADD CLICK EVENT FOR EDITING AN WORDS
  //   if (e.target.id.includes('delete-words-btn')) {
  //   // eslint-disable-next-line no-alert
  //     if (window.confirm('Want to delete?')) {
  //       const [, firebaseKey] = e.target.id.split('--');

//       deleteAuthorBooksRelationship(firebaseKey).then(() => {
//         getAuthors().then(showAuthors);
//       });
};
export default domEvents;
