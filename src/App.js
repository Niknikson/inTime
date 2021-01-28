import React from 'react';
import { Container } from '@material-ui/core';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Main />
      </Container>
    </>
  );
};

export default App;
