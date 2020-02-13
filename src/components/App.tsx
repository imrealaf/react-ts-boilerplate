import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Fragment, useEffect, useState } from 'react';

import theme from '../styles/theme';
import { Header, Routes } from './';
import { LoadingScreen, Preload, ScrollToTop } from './ui';

const App: React.FC = () => {
  /*
   *  Add font awesome icons to library
   */
  library.add(fas, fab);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  /*
   *  Render
   */
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/**
       * Preload
       */}
      <LoadingScreen active={!loaded}>
        <FontAwesomeIcon
          className="text-primary"
          icon={['fas', 'gem']}
          size="4x"
        />
      </LoadingScreen>

      {loaded ? (
        <Fragment>
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
        </Fragment>
      ) : null}
    </ThemeProvider>
  );
};

export default App;
