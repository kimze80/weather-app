import React from 'react';
import Weather from './pages/Weather/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <div>
    <Weather />
    <GlobalStyle />
  </div>
);

export default App;
