import React from 'react';
import { Container, InContainer, City } from './styles';

interface DataInfoProp {
  weatherDescription?: {
    description?: string;
    icon?: string;
  };
  weather?: {
    temp?: string;
    humidity?: string;
    pressure?: string;
  };
  city: string;
}

const WeatherData: React.FC<DataInfoProp> = ({
  weather,
  city,
  weatherDescription,
}) => {
  return (
    <Container>
      <InContainer>
        <City>{city}</City>
      </InContainer>

      <InContainer>
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${weatherDescription?.icon}@2x.png`}
            alt="city weather"
          />
          <p>{weatherDescription?.description}</p>
        </div>
        <div className="temperature">
          <p>{weather?.temp}˚C</p>
        </div>
        <div className="humidity">
          <p>Humidity: {weather?.humidity}</p>
          <p>Pressure: {weather?.pressure}</p>
        </div>
      </InContainer>
    </Container>
  );
};

export default WeatherData;
