const startApp = (_user) => {
  domBuilder(_user); // BUILD THE DOM
  domEvents(_user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(_user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all words on the DOM on App load
  getWords(_user.uid).then((words) => showWords(words));
};

export default startApp;
