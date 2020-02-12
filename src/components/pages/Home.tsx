import { Container } from '@material-ui/core';
import React from 'react';

import metaData from '../../data/meta.json';
import { Page } from '../hoc';

const Home: React.FC = () => {
  return (
    <Page {...metaData.home}>
      <Container>
        <h1>Home</h1>
        <p>This is the home page!</p>
      </Container>
    </Page>
  );
};

export default Home;
