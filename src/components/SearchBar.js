import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search events by name or location"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="search-bar"
  />
);

export default SearchBar;
