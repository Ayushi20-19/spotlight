import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./googlesearch.css";

const GoogleSearch = () => {
  return (
    <>
      <form
        action='https://www.google.com/search'
        method='get'
        className='search-form'>
        <input
          className='input search-input '
          name='search'
          placeholder='Google search'
          type='text'
          autoComplete='off'
        />
        <button className='search-btn' type='submit'>
          <SearchIcon className='search-icon' />
        </button>
      </form>
    </>
  );
};

export default GoogleSearch;
