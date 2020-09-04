import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { removeNomination } from '../actions';

const Nomination = ({ nomination, removeNomination }) => {
  const [displayTitle, setDisplayTitle] = useState(false);

  const handleClick = (e) => {
    removeNomination(nomination);
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
        onClick={handleClick}
      >
        {displayTitle ? (
          <div className="movie-detail nomination">
            <h3>{nomination.Title}</h3>
            <p style={{ marginTop: '.3rem' }}>({nomination.Year})</p>
          </div>
        ) : (
          <img
            src={
              nomination.image
                ? URL.createObjectURL(nomination.image)
                : nomination.Poster
            }
            alt={nomination.Title}
            className="movie-detail-image nomination"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://i.stack.imgur.com/yZlqh.png';
            }}
          />
        )}
      </div>
    </div>
  );
};

export default connect(null, { removeNomination })(Nomination);
