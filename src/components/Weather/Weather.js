import "./weather.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [lat, setLat] = useState("0");
  const [long, setLong] = useState("0");
  const [error, setError] = useState("");
  const [cityName, setCityName] = useState(
    localStorage.getItem("City") || "kolkata"
  );
  const [opneWeatherModal, setOpenWeatherModal] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const [data, setData] = useState({
    city: "",
    degrees: 0,
    weatherIcon: "",
    max: 0,
    min: 0,
    feelsLike: 0,
    humidity: 0,
    description: "",
  });

  var API;

  const getApi = (lat, long) => {
    if (lat === "0" || long === "0") {
      API = `${process.env.REACT_APP_API_URL}/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`;
    } else {
      API = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
    }
    return API;
  };

  useEffect(() => {
    (() => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    })();

    (async () => {
      const APIEndpoint = getApi(lat, long);
      try {
        const res = await axios(APIEndpoint);
        setData({
          city: res.data.name,
          degrees: Math.round(res.data.main.temp - 273.15),
          weatherIcon: res.data.weather[0].icon,
          max: Math.round(res.data.main.temp_max - 273.15),
          min: Math.round(res.data.main.temp_min - 273.15),
          humidity: res.data.main.humidity,
          feelsLike: Math.round(res.data.main.feels_like - 273.15),
          description: res.data.weather[0].description,
        });
        setError("");
      } catch (error) {
        setError("City not found");
      }
    })();
  }, [lat, long, getApi, cityName]);

  return (
    <div className='weather-box'>
      {showInput && (
        <div className='input-wrapper'>
          <input
            placeholder='Enter City Name'
            className='input weather-input'
            type='text'
            onKeyPress={(e) =>
              e.key === "Enter" &&
              (setCityName(e.target.value),
              localStorage.setItem("City", e.target.value))
            }
          />
        </div>
      )}
      {error === "" ? (
        <>
          <div className='initial-box-heading'>
            <img
              className='weather-icon'
              src={`http://openweathermap.org/img/wn/${data.weatherIcon}.png`}
              alt='weather'
            />
            <p>{data.degrees}° </p>
            <p
              className='city-name'
              onMouseEnter={() =>
                setOpenWeatherModal((opneWeatherModal) => !opneWeatherModal)
              }
              onMouseLeave={() => setOpenWeatherModal(false)}
              onClick={() => setShowInput((showInput) => !showInput)}>
              {data.city}
            </p>
          </div>

          {opneWeatherModal && (
            <>
              <div className='weather-modal'>
                <p className='city-name'>{data.city}</p>
                <p className='data-des'>{data.description}</p>
                <div className='data-display '>
                  <img
                    className='weather-icon'
                    src={`http://openweathermap.org/img/wn/${data.weatherIcon}.png`}
                    alt='weather'
                  />
                  <p className='data-deg'>{data.degrees}°</p>
                  <div className='maxmin-box'>
                    <p>Max: {data.max}°</p>
                    <p>Min: {data.min}°</p>
                  </div>
                </div>
                <div className='footer-div'>
                  <p>Feels like: {data.feelsLike}°</p>
                  <p>Humidity: {data.humidity}</p>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <div>
          <h4>{error}</h4>
        </div>
      )}
    </div>
  );
};

export { Weather };
