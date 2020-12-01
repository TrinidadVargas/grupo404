import React from 'react';
import { hot } from 'react-hot-loader';

function SingleMachine(props) {
  const { machine } = props;
  return (
    <div className="elemento">
      <div className="cont">
        <h2>{machine.name}</h2>
        <a href={machine.url}>
          <img className="medium" src= {machine.image} />
        </a>
        <p>{machine.description}</p>
        <p>Tipo: {machine.tipo}</p>
      </div>
    </div>
  );
}

export default hot(module)(SingleMachine);
