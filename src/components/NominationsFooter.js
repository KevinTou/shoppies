import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { removeAllNominations } from '../actions';

import Nomination from './Nomination';
import NominationsFooterMobile from './NominationsFooterMobile';

const NominationsFooter = ({ nominations, removeAllNominations }) => {
  const [open, setOpen] = useState(false);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  const toggle = (e) => {
    e.stopPropagation();

    setOpen((prev) => !prev);
  };

  return (
    <div
      className="footer-nominations-container"
      onClick={dimensions.width < 600 ? toggle : (e) => setOpen(false)}
    >
      {open ? (
        <NominationsFooterMobile toggle={toggle} />
      ) : (
        <>
          <p className="footer-nominations-display">{nominations.length}/5</p>
          <div className="footer-nominations">
            {nominations.map((nomination) => (
              <Nomination key={nomination.Title} nomination={nomination} />
            ))}
            {nominations.length > 0 && (
              <button
                className="footer-nominations-button-remove nomination"
                onClick={removeAllNominations}
              >
                Remove All
              </button>
            )}
          </div>
        </>
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

export default connect(mapStateToProps, { removeAllNominations })(
  NominationsFooter
);
