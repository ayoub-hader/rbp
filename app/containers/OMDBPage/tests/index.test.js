import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import storeMock from 'utils/storeMock';
import { loadMovies } from '../actions';
import OMDBPage from '..';

describe('<OMDBPage />', () => {
  it('should render and match snapshot without movies', () => {
    const store = storeMock({});
    const { container } = render(
      <Provider store={store}>
        <OMDBPage />
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.querySelector('.movies').childElementCount).toEqual(0);
  });

  it('should render movies list', () => {
    const store = storeMock({
      omdb: {
        movies: [
          {
            Title: 'Jumanji ...',
            Poster: 'N/A',
            Year: '2021',
            imdbID: 'imdb18979',
          },
        ],
      },
    });

    const { container } = render(
      <Provider store={store}>
        <OMDBPage />
      </Provider>,
    );
    expect(container.querySelector('.movies').childElementCount).toEqual(1);
  });

  it('should dispatch load movies action on search click', () => {
    const store = storeMock({});
    const { container } = render(
      <Provider store={store}>
        <OMDBPage />
      </Provider>,
    );

    container.querySelector('input').value = 'jumanji';
    fireEvent.click(container.querySelector('button'));

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(loadMovies('jumanji'));
  });
});
