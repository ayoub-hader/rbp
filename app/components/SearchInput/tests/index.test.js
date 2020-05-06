/* eslint-disable import/first */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchInput from '..';

describe('<SearchInput />', () => {
  let renderResult;
  let handleSearch;
  beforeEach(() => {
    handleSearch = jest.fn();
    renderResult = render(
      <SearchInput
        handleSearch={handleSearch}
        placeholder="search something"
      />,
    );
  });

  it('should render and match snapshot ', () => {
    const {
      container: { firstChild },
    } = renderResult;

    expect(firstChild).toMatchSnapshot();
  });

  it('should call handleSearch with appropriate text', () => {
    const {
      container: { firstChild },
    } = renderResult;

    expect(handleSearch).toHaveBeenCalledTimes(0);
    firstChild.querySelector('input').value = 'jumanji';
    fireEvent.click(firstChild.querySelector('button'));

    expect(handleSearch).toHaveBeenCalledTimes(1);
    expect(handleSearch).toHaveBeenCalledWith('jumanji');
  });
});
