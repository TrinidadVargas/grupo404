import React from 'react';
import { hot } from 'react-hot-loader';

function Button(props) {
  return (
    <button onClick={props.onClick}> Load from endpoint</button>
  );
};

export default hot(module)(Button);
