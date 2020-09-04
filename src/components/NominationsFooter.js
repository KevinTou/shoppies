import React from 'react';
import { connect } from 'react-redux';
import { removeAllNominations } from '../actions';

import Nomination from './Nomination';

const NominationsFooter = ({ nominations, removeAllNominations }) => {
  return (
    <div className="footer-nominations-container">
      <p className="footer-nominations-display">{nominations.length}/5</p>
      <div className="footer-nominations">
        {nominations.map((nomination) => (
          <Nomination key={nomination.Title} nomination={nomination} />
        ))}
        {nominations.length > 0 && (
          <button
            className="footer-nominations-button-remove"
            onClick={removeAllNominations}
          >
            Remove All
          </button>
        )}
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
  NominationsFooter
);
