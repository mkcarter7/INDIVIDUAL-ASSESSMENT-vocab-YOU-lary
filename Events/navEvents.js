import { showWords } from "../pages/words";

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: ALL WORDS
  document.querySelector('#all-books').addEventListener('click', () => {
    getWords().then(showWords);
  });
};
export default navigationEvents;
