import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { nominateMovie } from '../actions';

const Movie = ({ movie, nominations, nominateMovie }) => {
  const [displayTitle, setDisplayTitle] = useState(false);
  const [nominated, setNominated] = useState(false);

  useEffect(() => {
    let index = _.findIndex(nominations, function (o) {
      return o.Title === movie.Title;
    });

    if (index >= 0) {
      setNominated(true);
    } else {
      setNominated(false);
    }
  }, [nominations, movie]);

  const handleClick = (e) => {
    if (nominations.length < 5) {
      nominateMovie(movie);
    }
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
          <div className="movie-detail">
            <h3>{movie.Title}</h3>
            <p style={{ marginTop: '.3rem' }}>({movie.Year})</p>
          </div>
        ) : (
          <img
            src={movie.image ? URL.createObjectURL(movie.image) : movie.Poster}
            alt={movie.Title}
            className="movie-detail-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://i.stack.imgur.com/yZlqh.png';
            }}
          />
        )}
      </div>
      {nominated ? (
        <p className="movie-detail-nominated">Nominated</p>
      ) : (
        <button
          className="movie-detail-button nomination"
          onClick={handleClick}
        >
          Nominate
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { nominations } = state.movies;

  return {
    nominations,
  };
};

export default connect(mapStateToProps, { nominateMovie })(Movie);
