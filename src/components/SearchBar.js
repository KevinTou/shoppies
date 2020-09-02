import React, { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('I was clicked');
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <button className="search-form-icon">
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

export default SearchBar;
