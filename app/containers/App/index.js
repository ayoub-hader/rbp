/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { hot } from 'react-hot-loader/root';
import HomePage from 'pages/HomePage/Loadable';
import NotFoundPage from 'pages/NotFoundPage/Loadable';
import TestPage from 'pages/TestPage/Loadable';
import registerYupLocale from 'utils/yupValidator';

import GlobalStyle from 'global-styles';
import theme from 'theme';

registerYupLocale();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={TestPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default hot(App);
