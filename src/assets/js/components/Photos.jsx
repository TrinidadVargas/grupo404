import React from 'react';
import { hot } from 'react-hot-loader';
import Button from './Button';
import SinglePhoto from './SinglePhoto';

function Photos(props) {
  const photosArray = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
  ];

  return (
    <div>
      <h1>React Photos</h1>
      <Button />
      <ul className="photos">
        {photosArray.map((photo) => (
          <SinglePhoto key={photo.id} photo={photo} />
        ))}
      </ul>
    </div>
  );
}

export default hot(module)(Photos);
