import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import storeMock from 'utils/storeMock';
import { DEFAULT_LOCALE } from 'locales';
import { IntlProvider } from 'react-intl';

const withMockedStoreProvider = (
  Component,
  store = storeMock({}),
  locale = DEFAULT_LOCALE,
) => {
  const TestComponent = props => (
    <Provider store={store}>
      <IntlProvider locale={locale}>
        <Component {...props} />
      </IntlProvider>
    </Provider>
  );

  TestComponent.propTypes = {
    store: PropTypes.object,
    locale: PropTypes.object,
  };
  return TestComponent;
};

export default withMockedStoreProvider;
