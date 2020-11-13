import React from 'react';
import { hot } from 'react-hot-loader';

function Button(props) {
  return (
    <button>Load from endpoint</button>
  );
}

export default hot(module)(Button);
