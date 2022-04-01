import React from 'react';
import { render } from '@testing-library/react';
import Button from 'components/Button/index';
import withMockedStoreProvider from "utils/withMockedStoreProvider";

const ButtonContainer = withMockedStoreProvider(Button);

describe('<Button />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<ButtonContainer />);
    expect(firstChild).toMatchSnapshot();
  })
})
