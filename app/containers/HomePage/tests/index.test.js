import React from 'react';
import { render } from '@testing-library/react';
import HomePage from 'containers/HomePage/index';
import withMockedStoreProvider from 'utils/withMockedStoreProvider';

const HomePageContainer = withMockedStoreProvider(HomePage);

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<HomePageContainer />);
    expect(firstChild).toMatchSnapshot();
  });
});
