import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Chat from './components/Chat';
import NewMsg from './components/NewMsg';
import NewUserForm from './components/NewUserForm';
import Machines from './components/Machines';

const reactAppContainer = document.getElementById('react-app');

if (reactAppContainer) {
  ReactDOM.render(<App />, reactAppContainer);
}

const chatAppContainer = document.getElementById('chat-app');

if (chatAppContainer) {
  ReactDOM.render(<Chat data={chatAppContainer.dataset} />, chatAppContainer);
}

const newMsgFormContainer = document.getElementById('new-msg-app');

if (newMsgFormContainer) {
  ReactDOM.render(<NewMsg data={newMsgFormContainer.dataset} />, newMsgFormContainer);
}

const machinesAppContainer = document.getElementById('machines-app');

if (machinesAppContainer) {
  ReactDOM.render(<Machines />, machinesAppContainer);
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
