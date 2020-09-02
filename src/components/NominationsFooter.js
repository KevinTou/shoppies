import React from 'react';
import { connect } from 'react-redux';

const NominationsFooter = ({ nominations }) => {
  return (
    <div className="footer-nominations-container">
      <p className="footer-nominations-display">{nominations.length}/5</p>
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
