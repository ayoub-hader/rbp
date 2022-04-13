import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import withMockedStoreProvider from 'utils/withMockedStoreProvider';
import HomePage from '..';

const HomePageContainer = withMockedStoreProvider(HomePage);

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<HomePageContainer />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should display correct error message', () => {
    const { getByTestId, findByText } = render(<HomePageContainer />);

    getByTestId('button');

    fireEvent.click(getByTestId('button'));

    findByText('This field is required');
  });
});
