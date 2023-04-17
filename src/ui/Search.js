import React from 'react';

const Search = (props) => {

  return (
    <div className="search-box">
    <input onChange={props.searchHandler} />
    </div>
  );
};

export default Search