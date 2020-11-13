import React from 'react';
import { hot } from 'react-hot-loader';

function SinglePhoto(props) {
  const { photo } = props;
  return (
    <li className="photo">
      <h3>{photo.title}</h3>
      <img src={photo.thumbnailUrl} />
    </li>
  );
}

export default hot(module)(SinglePhoto);
