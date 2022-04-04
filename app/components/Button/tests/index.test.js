import React from 'react';
import { render } from '@testing-library/react';
import Button from 'components/Button/index';
import withMockedStoreProvider from 'utils/withMockedStoreProvider';

const ButtonContainer = withMockedStoreProvider(Button);

describe('<Button />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<ButtonContainer />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should match value prop passed to component container', () => {
    const value = 'submit';
    const {
      container: { firstChild },
      getByTestId,
    } = render(<ButtonContainer value={value} />);
    expect(getByTestId('button').innerHTML).toEqual(value);
  });
});
