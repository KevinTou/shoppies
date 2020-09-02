import React from 'react';

import SearchBar from './SearchBar';
import MovieContainer from './MovieContainer';
import NominationsFooter from './NominationsFooter';

const App = () => {
  return (
    <>
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
