import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./googlesearch.css";

const GoogleSearch = () => {
  return (
    <>
      <div className='form-conatiner'>
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
      </div>
    </>
  );
};

export default GoogleSearch;
