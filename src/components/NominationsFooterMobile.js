import React from 'react';
import { connect } from 'react-redux';
import { removeAllNominations } from '../actions';

import NominationMobile from './NominationMobile';

const NominationsFooterMobile = ({
  nominations,
  removeAllNominations,
  toggle,
}) => {
  return (
    <div className="nominations-footer-mobile">
      <div className="nominations-footer-mobile-display-wrapper">
        <p className="nominations-footer-mobile-display-note">
          Click anywhere to close
        </p>
        <p className="nominations-footer-mobile-display">
          {nominations.length}/5
        </p>
        <div className="nominations-footer-mobile-nominations">
          {nominations.map((nomination) => (
            <NominationMobile key={nomination.Title} nomination={nomination} />
          ))}
          {nominations.length > 0 && (
            <button className="mobile-button" onClick={removeAllNominations}>
              Remove All
            </button>
          )}
        </div>
      </div>
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
  NominationsFooterMobile
);
