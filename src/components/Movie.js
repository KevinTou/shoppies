import React from 'react';
import data from '../test.json';

const Movie = () => {
  console.log(data);
  return (
    <div>
      <div style={{ height: '230px' }}>
        <img src={data.Poster} style={{ height: '100%' }} alt={data.Title} />
      </div>
      <button>Nominate</button>
    </div>
  );
};

export default Movie;
