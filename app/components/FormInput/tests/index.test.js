import React from 'react';
import { render } from '@testing-library/react';
import FormInput from '..';

describe('<FormInput />', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(<FormInput register={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });

  it('input label should match props passed to component container', () => {
    const label = 'firstName';
    const { getByTestId } = render(
      <FormInput label={label} register={jest.fn()} />,
    );
    expect(getByTestId('label').innerHTML).toEqual(label);
  });

  it('should print error if it exist', () => {
    const error = {
      message: 'Error message',
    };
    const { getByTestId } = render(
      <FormInput error={error} register={jest.fn()} />,
    );
    expect(getByTestId('error').innerHTML).toEqual(error?.message);
  });
});
