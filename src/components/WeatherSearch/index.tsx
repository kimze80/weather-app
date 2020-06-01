import React, { FormEventHandler } from 'react';
import { Container } from './styles';

interface SubmitFormProp {
  onsubmit: FormEventHandler;
  onchange: FormEventHandler;
  value: string;
}

const WeatherSearch: React.FC<SubmitFormProp> = ({
  onchange,
  onsubmit,
  value,
}) => {
  return (
    <Container>
      <form onSubmit={onsubmit}>
        <input
          name="location"
          type="text"
          placeholder="Your city..."
          value={value}
          onChange={onchange}
        />
        <button type="submit"> Search </button>
      </form>
    </Container>
  );
};

export default WeatherSearch;
