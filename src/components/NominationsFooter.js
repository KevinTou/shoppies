import React from 'react';
import { connect } from 'react-redux';

import Nomination from './Nomination';

const NominationsFooter = ({ nominations }) => {
  return (
    <div className="footer-nominations-container">
      <p className="footer-nominations-display">{nominations.length}/5</p>
      {nominations.map((nomination) => (
        <Nomination key={nomination.Title} nomination={nomination} />
      ))}
      {nominations.length > 0 && (
        <button className="footer-nominations-button-remove">Remove All</button>
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

export default connect(mapStateToProps, {})(NominationsFooter);
