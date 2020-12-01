import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Photos from './components/Photos';
import Chat from './components/Chat';
import NewMsg from './components/NewMsg';
// import PasswordUserForm from './components/NewUserForm';
// import EmailUserForm from './components/NewUserForm';
import NewUserForm from './components/NewUserForm';

const reactAppContainer = document.getElementById('react-app');

if (reactAppContainer) {
  ReactDOM.render(<App />, reactAppContainer);
}

const photosAppContainer = document.getElementById('photos-app');

if (photosAppContainer) {
  ReactDOM.render(<Photos />, photosAppContainer);
}

const chatAppContainer = document.getElementById('chat-app');

if (chatAppContainer) {
  ReactDOM.render(<Chat data={chatAppContainer.dataset}/>, chatAppContainer);
}

const newMsgFormContainer = document.getElementById('new-msg-app');

if (newMsgFormContainer) {
  ReactDOM.render(<NewMsg data={newMsgFormContainer.dataset}/>, newMsgFormContainer);
}

const newUserFormAppConteiner = document.getElementById('new-user-form-app');
if (newUserFormAppConteiner) {
  ReactDOM.render(<NewUserForm data={newUserFormAppConteiner.dataset}/>, newUserFormAppConteiner);
}

// const passwordUserFormAppConteiner = document.getElementById('pass-user-form-app');
// if (passwordUserFormAppConteiner) {
//   ReactDOM.render(<PasswordUserForm />, passwordUserFormAppConteiner);
// }

// const mailUserFormAppConteiner = document.getElementById('mail-user-form-app');
// if (mailUserFormAppConteiner) {
//   ReactDOM.render(<EmailUserForm />, mailUserFormAppConteiner);
// }
