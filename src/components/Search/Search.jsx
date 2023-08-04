import React, { useState } from 'react';
import './Search.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('name');

 

  const handleSearchCategoryChange = (category) => {
    setSearchCategory(category);
    onSearch(category, searchQuery); // Call onSearch immediately when the category changes
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    onSearch(searchCategory, query); // Call onSearch immediately when the query changes
  };

  return (
    <div className="search-container">
      <div className="radio-buttons">
        <div>
          <input
            type="radio"
            id="name"
            value="name"
            checked={searchCategory === 'name'}
            onChange={() => handleSearchCategoryChange('name')} // Use the correct function name
          />
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input
            type="radio"
            id="ingredients"
            value="ingredients"
            checked={searchCategory === 'ingredients'}
            onChange={() => handleSearchCategoryChange('ingredients')} // Use the correct function name
          />
          <label htmlFor="ingredients">Ingredients</label>
        </div>
        <div>
          <input
            type="radio"
            id="cuisine"
            value="cuisine"
            checked={searchCategory === 'cuisineType'}
            onChange={() => handleSearchCategoryChange('cuisineType')} // Use the correct function name
          />
          <label htmlFor="cuisine">Cuisine</label>
        </div>
      </div>
      <div className="search-input">
        <input
          type="text"
          placeholder={`Search by ${searchCategory}`}
          value={searchQuery}
          onChange={(e) => handleSearchQueryChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
