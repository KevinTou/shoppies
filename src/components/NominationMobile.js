import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeNomination } from '../actions';

const NominationMobile = ({ nomination, removeNomination }) => {
  const [displayTitle, setDisplayTitle] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();

    removeNomination(nomination);
  };

  const showTitle = (e) => {
    setDisplayTitle(true);
  };

  const removeTitle = (e) => {
    setDisplayTitle(false);
  };

  return (
    <>
      <div
        className="mobile-wrapper"
        onMouseEnter={showTitle}
        onMouseLeave={removeTitle}
        onClick={handleClick}
      >
        {displayTitle ? (
          <div className="mobile-detail">
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
            className="mobile-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://i.stack.imgur.com/yZlqh.png';
            }}
          />
        )}
      </div>
    </>
  );
};

export default connect(null, { removeNomination })(NominationMobile);
