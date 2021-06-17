import React from 'react';

import { setSearchTerm, clearSearchTerm } from './searchTermSlice.js';

const searchIcon = 'img/search.svg';
const clearIcon = 'img/clear.svg';

export default function SearchTerm(props) {

  const { searchTerm, dispatch } = props;

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div className="search-container">
      <img id="search-icon" alt="" src={searchIcon} />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder="Search recipes"
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
          <img src={clearIcon} alt="" />
        </button>
      )}
    </div>
  )
}