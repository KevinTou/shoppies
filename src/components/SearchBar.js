import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions';

const SearchBar = ({ searchMovies }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    searchMovies(search);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <button className="search-form-icon nomination">
        <i className="fa fa-search"></i>
      </button>
      <input
        className="search-form-bar"
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search for a movie..."
      />
    </form>
  );
};

export default connect(null, { searchMovies })(SearchBar);
