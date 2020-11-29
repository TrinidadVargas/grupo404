import React from 'react';
import { hot } from 'react-hot-loader';

function SingleMachine(props) {
  const { machine } = props;
  return (
    <li className="single_machine">
      <h2>{machine.name}</h2>
      
      <p>{machine.description}</p>
      <p>{machine.tipo}</p>
    </li>
  );
}

export default hot(module)(SingleMachine);
