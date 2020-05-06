import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from '../index';

describe('<MovieCard />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <MovieCard poster="img/url.jpg" title="Mind Hunters" year="201x" />,
    );

    expect(firstChild).toMatchSnapshot();
    expect(firstChild.querySelector('img').getAttribute('src')).toEqual(
      'img/url.jpg',
    );
  });

  it('should render with no-poster image mock', () => {
    const {
      container: { firstChild },
    } = render(<MovieCard poster="N/A" title="Mind Hunters" year="201x" />);

    expect(firstChild.querySelector('img').getAttribute('src')).toEqual(
      'IMAGE_MOCK',
    );
  });
});
