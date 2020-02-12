import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';

import theme from '../styles/theme';
import { Header, Routes } from './';
import { Preload, ScrollToTop } from './ui';

const App: React.FC = () => {
  /*
   *  Add font awesome icons to library
   */
  library.add(fas, fab);

  /*
   *  Render
   */
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/**
       * Preload
       */}
      <Preload animateOut={true}>
        <FontAwesomeIcon
          className="text-primary"
          icon={['fas', 'gem']}
          size="4x"
        />
      </Preload>

      {/**
       * Header
       */}
      <Header />

      {/**
       * Main
       */}
      <main id="main" role="main">
        <Routes />
      </main>

      {/*
       * Scroll-to-top
       */}
      <ScrollToTop anchor="#top" threshold={400} size="medium" />
    </ThemeProvider>
  );
};

export default App;
