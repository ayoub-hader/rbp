/**
 *
 * OmdbPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { makeSelectMovies } from './selectors';
import reducer from './reducer';
import saga from './saga';
import SearchInput from '../../components/SearchInput';
import MovieCard from '../../components/MovieCard';
import { loadMovies } from './actions';

const stateSelector = createStructuredSelector({
  movies: makeSelectMovies,
});
const Wrapper = styled.div`
  padding: 10px;
  .movies {
    margin: 20px 0;
  }
`;

function OmdbPage() {
  useInjectReducer({ key: 'omdbPage', reducer });
  useInjectSaga({ key: 'omdbPage', saga });

  /* eslint-disable no-unused-vars */
  const { omdbPage, movies } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */
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

OmdbPage.propTypes = {};

export default OmdbPage;
