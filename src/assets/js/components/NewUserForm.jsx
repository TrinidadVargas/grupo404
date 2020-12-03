import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';


function UserType(props) {
  return (
    <div>
      <input type="hidden" id="user_type" name="user_type" value={1} />
    </div>
  );
}

function PasswordUserForm(props) {
  const [text, setText] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('.');
  const [passwordLength, setPasswordLength] = React.useState(false);
  
  const handlePasswordChange = (event) => {
    setText(event.target.value)
    if (text.length >= 5) {
      setErrorMessage('.');
    } else {
      setErrorMessage('Largo minimo de 6 caracteres');
    }
  };
  return (
    <div className="field">
      <label>Contraseña</label>
      <input type="password" id="password" name="password" onChange={handlePasswordChange} value={text}/>
      <span className="error">
        {errorMessage}
      </span>
    </div>
  );
}

function EmailUserForm(props) {
  const [text, setText] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [passwordValidEmail, setValidEmail] = React.useState(false);
  
  const handleEmailChange = (event) => {
    setText(event.target.value)
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
    if (re.test(text)) {
      setErrorMessage('.');
      setValidEmail(true);
    } else {
      setErrorMessage('Ingrese un mail válido');
      setValidEmail(false);
    }
    console.log(text);
  };
  return (
    <div className="field">
      <label>Email</label>
      <input type="email" id="email" name="email" onChange={handleEmailChange} value={text}/>
      <span className="error">
        {errorMessage}
      </span>
    </div>
  );
}

function NewUserForm(props) {
  console.log(props);
  const { data: {isAdmin}} = props;
  console.log(isAdmin); 
  return (
    <div>
      <div>
        <div className="field">
          <label>Nombre</label>
          <input type="text" id="name" name="name" />
          <span className="error"></span>
        </div>
        <div className="field">
          <label>Apellido</label>
          <input type="text" id="lastname" name="lastname" />
          <span className="error"></span>
        </div>
        < EmailUserForm/>
        < PasswordUserForm/>
        <div className="field">
          <label>Rut</label>
          <input type="text" id="rut" name="rut"/>
          <span className="error"></span>
        </div>
        < UserType isAdmin={isAdmin}/>
      </div>
    </div>
  );
};

export default hot(module)(NewUserForm);

// export default hot(module)(EmailUserForm);