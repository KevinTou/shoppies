import React from 'react';
import { connect } from 'react-redux';
import Confetti from 'react-dom-confetti';

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 150,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

const ConfettiBanner = ({ nominations }) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Confetti active={nominations.length === 5} config={config} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { nominations } = state.movies;

  return {
    nominations,
  };
};

export default connect(mapStateToProps, {})(ConfettiBanner);
