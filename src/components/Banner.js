import React, { useState } from 'react';
import { connect } from 'react-redux';

const Banner = ({ nominations }) => {
  const [close, setClose] = useState(false);

  if (nominations.length === 5) {
    return (
      <div
        className={`nominations-banner ${close && 'close'}`}
        onClick={() => setClose(true)}
      >
        <p className="nominations-banner-details">
          You have successfully chosen 5 nominations!
        </p>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  const { nominations } = state.movies;

  return {
    nominations,
  };
};

export default connect(mapStateToProps, {})(Banner);
