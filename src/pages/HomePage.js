import React from "react";
import DayFocus from "../components/DayFocus/DayFocus";
import GoogleSearch from "../components/GoogleSearch/GoogleSearch";
import Quotes from "../components/Quotes/Quotes";
import TimeDisplay from "../components/Time/TimeDisplay";
import Todo from "../components/Todo/Todo";
import { Weather } from "../components/Weather/Weather";

const HomePage = () => {
  return (
    <div>
      <div className='wrapper landing-image'>
        <GoogleSearch />
        <DayFocus />
        <TimeDisplay />
        <Todo />
        <Weather />
        <Quotes />
      </div>
    </div>
  );
};

export default HomePage;
