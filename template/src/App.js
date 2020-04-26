import React from 'react';
import Home from './components/Home';
import './App.css';
import styled from 'styled-components';

const App = styled.div`
  background-color: ${({theme}) => theme.secondary};
  text-align: center;
  height: 100vh;
`;

export default () => {
  return (
    <App>
      <Home />
    </App>
  );
}
