import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import WeatherSearch from '../../components/WeatherSearch';
import WeatherData from '../../components/WeatherData';

const Weather: React.FC = () => {
  const [weather, setWeather] = useState();
  const [weatherDescription, setWeatherDescription] = useState();
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');

  const handleOnChange = useCallback((e) => {
    const { value } = e.target;
    setLocation(value);
  }, []);

  const apiCall = useCallback(
    async (e) => {
      e.preventDefault();
      if (location === '') {
        return;
      }
      const API_KEY = 'e1944fa1a696bafbfabef38170a9a034';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
      const request = axios.get(url);
      const response = await request;
      setWeather(response.data.main);
      setCity(response.data.name);
      setWeatherDescription(response.data.weather[0]);
      setLocation('');
    },
    [location],
  );

  return (
    <Container>
      <h1>KIM Weather Today</h1>
      <WeatherSearch
        onsubmit={apiCall}
        value={location}
        onchange={handleOnChange}
      />
      {weather && (
        <WeatherData
          weather={weather}
          city={city}
          weatherDescription={weatherDescription}
        />
      )}
    </Container>
  );
};

export default Weather;
