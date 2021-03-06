import React from 'react';

import SearchBar from './SearchBar';
import MovieContainer from './MovieContainer';
import NominationsFooter from './NominationsFooter';
import ConfettiBanner from './ConfettiBanner';
import Banner from './Banner';

const App = () => {
  return (
    <>
      <Banner />
      <ConfettiBanner />
      <main className="main-container">
        <section className="main-hero">
          <h1 className="main-title">The Shoppies</h1>
          <SearchBar />
          <MovieContainer />
        </section>
      </main>
      <NominationsFooter />
    </>
  );
};

export default App;
