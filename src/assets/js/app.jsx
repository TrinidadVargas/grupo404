import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Photos from './components/Photos';

const reactAppContainer = document.getElementById('react-app');

if (reactAppContainer) {
  ReactDOM.render(<App />, reactAppContainer);
}

const photosAppContainer = document.getElementById('photos-app');

if (photosAppContainer) {
  ReactDOM.render(<Photos />, photosAppContainer);
}
