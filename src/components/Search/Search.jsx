import React, { useState } from 'react';
import './Search.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('name');

 

  const handleSearchCategoryChange = (category) => {
    setSearchCategory(category);
    onSearch(category, searchQuery); 
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    onSearch(searchCategory, query); 
  };

  return (
    <div className="search-container">
      <div className="search-input">
        <input
          type="text"
          placeholder={`Search by ${searchCategory}`}
          value={searchQuery}
          onChange={(e) => handleSearchQueryChange(e.target.value)}
        />
      </div>

      <div className="radio-buttons">
        <div>Filters:</div>
        <div className='radio'>
          <input
            type="radio"
            id="name"
            value="name"
            checked={searchCategory === 'name'}
            onChange={() => handleSearchCategoryChange('name')} 
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className='radio'>
          <input
            type="radio"
            id="ingredients"
            value="ingredients"
            checked={searchCategory === 'ingredients'}
            onChange={() => handleSearchCategoryChange('ingredients')} 
          />
          <label htmlFor="ingredients">Ingredients</label>
        </div>
        <div className='radio'>
          <input
            type="radio"
            id="cuisine"
            value="cuisine"
            checked={searchCategory === 'cuisineType'}
            onChange={() => handleSearchCategoryChange('cuisineType')} 
          />
          <label htmlFor="cuisine">Cuisine</label>
        </div>
      </div>
    
      
    </div>
  );
};

export default SearchBar;
