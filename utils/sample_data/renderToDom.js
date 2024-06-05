const startApp = (_user) => {
  domBuilder(_user); // BUILD THE DOM
  domEvents(_user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(_user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  getBooks(_user.uid).then((books) => showBooks(books));
};

export default startApp;
