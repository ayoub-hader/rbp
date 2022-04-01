import React from 'react';
import { render } from '@testing-library/react';
import FormInput from 'components/FormInput/index';
import withMockedStoreProvider from "utils/withMockedStoreProvider";

const FormInputContainer = withMockedStoreProvider(<FormInput />);

describe('<FormInput />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<FormInputContainer />);
    expect(firstChild).toMatchSnapshot();
  })
})
