import React from 'react';
import { connect } from 'react-redux';
import { nominateMovie } from '../actions';

const Movie = ({ movie, nominateMovie }) => {
  const handleClick = (e) => {
    nominateMovie();
  };

  return (
    <div>
      <div style={{ height: '230px' }}>
        <img
          src={movie.image ? URL.createObjectURL(movie.image) : movie.Poster}
          style={{ height: '100%', maxWidth: '150px' }}
          alt={movie.Title}
        />
      </div>
      <button onClick={handleClick}>Nominate</button>
    </div>
  );
};

export default connect(null, { nominateMovie })(Movie);
