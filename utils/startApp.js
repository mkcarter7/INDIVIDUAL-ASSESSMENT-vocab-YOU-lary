import getWords from '../api/word';
import logoutButton from '../components/Buttons/logoutButton';
import domBuilder from
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showWords } from '../pages/word';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all words on the DOM on App load
  getWords(_user.uid).then((words) => showWords(words));
};

export default startApp;
