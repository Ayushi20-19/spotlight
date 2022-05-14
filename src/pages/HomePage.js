import React from "react";
import GoogleSearch from "../components/GoogleSearch/GoogleSearch";
import Todo from "../components/Todo/Todo";
import { Weather } from "../components/Weather/Weather";

const HomePage = () => {
  return (
    <div>
      <div className='wrapper landing-image'>
        <GoogleSearch />
        <Todo />
        <Weather />
      </div>
    </div>
  );
};

export default HomePage;
