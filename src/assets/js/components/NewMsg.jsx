import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';

// document.addEventListener('DOMContentLoaded', function() {
//   console.log('Ahora si');
//   // const btn = document.querySelector
// });

function buildMessagesPath(convId) {
  return `/conversations/${convId}/msgs`;
}

const sendMessage = (convId, userId, text) => (
  fetch(buildMessagesPath(convId), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ senderId: userId, message: text, conversationId: convId }),
  })
);

function NewMsgForm(props) {
  const { data: {userId, convId}} = props;
  const [text, setText] = React.useState('');

  const handleSendMsgsClick = () => {
    sendMessage(convId, userId, text);
  };

  const handleChange = (event) => {
    setText(event.target.value)
  };

  return (
    <div className="this-form">
      <label>
        <input type="text" onChange={handleChange}/>
      </label>
      <button onClick={handleSendMsgsClick}>Send</button>
    </div>
  );
}

export default hot(module)(NewMsgForm);
