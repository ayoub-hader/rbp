/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import OMDBPage from '../OmdbPage';
import LoginPage from '../LoginPage';
import theme from './theme';

import GlobalStyle from '../../global-styles';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={OMDBPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default hot(App);
