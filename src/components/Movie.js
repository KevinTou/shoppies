import React, { useState } from 'react';
import { connect } from 'react-redux';
import { nominateMovie } from '../actions';

const Movie = ({ movie, nominateMovie }) => {
  const [displayTitle, setDisplayTitle] = useState(false);

  const handleClick = (e) => {
    nominateMovie(movie);
  };

  const showTitle = (e) => {
    setDisplayTitle(true);
  };

  const removeTitle = (e) => {
    setDisplayTitle(false);
  };

  return (
    <div>
      <div
        className="movie-detail-wrapper"
        onMouseEnter={showTitle}
        onMouseLeave={removeTitle}
      >
        {displayTitle ? (
          <div>
            <h3>{movie.Title}</h3>
            <p>({movie.Year})</p>
          </div>
        ) : (
          <img
            src={movie.image ? URL.createObjectURL(movie.image) : movie.Poster}
            alt={movie.Title}
            className="movie-detail-image"
          />
        )}
      </div>
      <button className="movie-nomination-button" onClick={handleClick}>
        Nominate
      </button>
    </div>
  );
};

export default connect(null, { nominateMovie })(Movie);
