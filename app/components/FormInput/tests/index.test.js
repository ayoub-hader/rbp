import React from 'react';
import { render } from '@testing-library/react';
import FormInput from 'components/FormInput/index';
import withMockedStoreProvider from 'utils/withMockedStoreProvider';

const FormInputContainer = withMockedStoreProvider(FormInput);

describe('<FormInput />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<FormInputContainer />);
    expect(firstChild).toMatchSnapshot();
  });

  it('input label should match props passed to component container', () => {
    const label = 'firstName';
    const {
      container: { firstChild },
      getByTestId,
    } = render(<FormInputContainer label={label} />);
    expect(getByTestId('label').innerHTML).toEqual(label);
  });

  it('should print error if it exist', () => {
    const error = {
      message: 'Error message',
    };
    const {
      container: { firstChild },
      getByTestId,
    } = render(<FormInputContainer error={error} />);
    expect(getByTestId('error').innerHTML).toEqual(error?.message);
  });
});
