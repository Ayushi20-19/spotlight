import React from "react";
import GoogleSearch from "../components/GoogleSearch/GoogleSearch";
import Todo from "../components/Todo/Todo";

const HomePage = () => {
  return (
    <div>
      <div className='wrapper landing-image'>
        <GoogleSearch />
        <Todo />
      </div>
    </div>
  );
};

export default HomePage;
