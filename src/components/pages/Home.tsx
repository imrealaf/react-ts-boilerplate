import { Container } from '@material-ui/core';
import React from 'react';

import metaData from '../../data/meta.json';
import { Page } from '../hoc';
import { Slideshow } from '../ui';

const slides = [
  {
    src: '/images/1.jpg',
    overlay: true,
    kenBurns: true
  },
  {
    src: '/images/2.jpg',
    overlay: true
  },
  {
    src: '/images/3.jpg',
    overlay: true
  }
];

const Home: React.FC = () => {
  return (
    <Page {...metaData.home}>
      <Slideshow items={slides} nav={true} fillHeight={true} />
      <Container />
    </Page>
  );
};

export default Home;
