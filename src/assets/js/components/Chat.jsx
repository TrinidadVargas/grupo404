import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';

// document.addEventListener('DOMContentLoaded', function() {
//   console.log('Ahora si');
//   // const btn = document.querySelector
// });

function buildMessagesPath(convId) {
  return `/conversations/${convId}/msgs`;
}

// function fetchMessages(convId) {
//   fetch(
//     buildMessagesPath(convId)
//   ).then(response => response.json());
// }

const fetchMessages = (convId) => (
  fetch(buildMessagesPath(convId))
    .then(response => response.json())
);

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

// export async function fetchData(url) {
//   const response = await fetch(url, {Accept: 'application/json'});
//   return response.json();
// };

function SingleMessage(props) {
  const {message, userId} = props;
  if (userId == message.senderId) {
    return (
      <div className="my-msg">
        <p> {message.message} </p>
        <p> {message.createdAt.toLocaleString('es-CL')} </p>
      </div>
    );
  }
  return (
    <div className="other-msg">
      <p> {message.message} </p>
      <p> {message.createdAt.toLocaleString('es-CL')} </p>
    </div>
  );
}


function Chat(props) {
  const { data: {userId, convId}} = props;
  const [messages, setMessages] = React.useState([]);
  const [text, setText] = React.useState('');

  useEffect(() => {
    fetchMessages(convId)
      .then((msgs) => {
        setMessages(msgs);
      });
  }, []);

  const handleMsgsClick = () => {
    fetchMessages(convId)
      .then((msgs) => {
        setMessages(msgs);
      });
  };

  const handleSendMsgsClick = () => {
    if (text != '')
      sendMessage(convId, userId, text).then(() => handleMsgsClick()).then(setText(''));
  };

  const handleChange = (event) => {
    setText(event.target.value)
  };
  
  return (
    <div>
      <button onClick={handleMsgsClick} >Recargar</button>
      <div className="messages">
        {messages.map((msg) => (
          < SingleMessage key={msg.id} message={msg} userId={userId}/>
        ))}
      </div>
      <div className="this-form">
      <label>
        <input type="text" onChange={handleChange} value={text}/>
      </label>
      <button onClick={handleSendMsgsClick}>Send</button>
      </div>
    </div>
  );

}

export default hot(module)(Chat);