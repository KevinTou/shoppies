import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchMovies, clearSearch } from '../actions';

const SearchBar = ({ searchMovies, clearSearch }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      searchMovies(search);

      if (search === '') {
        clearSearch();
      }
    }, 500);

    return () => clearTimeout(debounceSearch);
  }, [search, searchMovies, clearSearch]);

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

export default connect(null, { searchMovies, clearSearch })(SearchBar);
