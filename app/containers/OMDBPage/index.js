import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import SearchInput from 'components/SearchInput';
import MovieCard from 'components/MovieCard';
import { makeSelectMovies } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadMovies } from './actions';

const key = 'omdb';

const omdbSelector = createStructuredSelector({
  movies: makeSelectMovies,
});

const Wrapper = styled.div`
  padding: 10px;

  .movies {
    margin: 20px 0;
  }
`;

export default function OMDBPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { movies } = useSelector(omdbSelector);
  const dispatch = useDispatch();
  const handleSearch = search => dispatch(loadMovies(search));

  return (
    <Wrapper>
      <SearchInput
        placeholder="search movies by title"
        handleSearch={handleSearch}
      />
      <div className="movies">
        {movies &&
          movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
            />
          ))}
      </div>
    </Wrapper>
  );
}
