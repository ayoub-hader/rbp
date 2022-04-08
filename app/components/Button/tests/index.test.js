import React from 'react';
import { render } from '@testing-library/react';
import Button from '../index';

describe('<Button />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Button />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should match value prop passed to component container', () => {
    const value = 'submit';
    const {
      container: { firstChild },
      getByTestId,
    } = render(<Button value={value} />);
    expect(getByTestId('button').innerHTML).toEqual(value);
  });
});
