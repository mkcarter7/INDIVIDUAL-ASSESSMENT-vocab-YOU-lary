import { signOut } from '../../utils/auth';
// GOOGLE LOGIN BUTTON
const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#login-form-container').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
