import React from 'react';
import logo from '../../logo.svg';
import Counter from '../Counter';
import { Header, AppLogo, Span, AppLink, Text } from './styled';

export default () => {
  const links = [
    {
      span: 'Learn',
      link: 'https://reactjs.org/',
      textLink: 'React'
    },
    {
      span: ',',
      link: 'https://redux.js.org/',
      textLink: 'Redux'
    },
    {
      span: ',',
      link: 'https://redux-toolkit.js.org/"',
      textLink: 'Redux Toolkit'
    },
    {
      span: ',',
      link: 'https://react-redux.js.org/"',
      textLink: 'React Redux'
    }
  ];

  const learnBox = links.map(({ span, link, textLink }) => (
    <>
      <Span>{span} </Span>
      <AppLink href={link} target="_blank" rel="noopener noreferrer">
        {textLink}
      </AppLink>
    </>
  ));

  return (
    <Header>
      <AppLogo img src={logo} alt="logo" />
      <Counter />
      <Text>
        Edit <code>src/App.js</code> and save to reload.
      </Text>
      <span>{learnBox}</span>
    </Header>
  );
};
