/**
 *
 * OmdbPage
 *
 */

import React, { useState } from 'react';
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
import CredentialsField from '../../components/CredentialsField';
import IconUser from './iconSvg/close@2x.png';
import FormButton, {
  ButtonSecondary,
  InvertedButton,
} from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import BlockMenu from '../BlockMenu';

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
  const [value, setValue] = useState('');
  const [valueInput, setValueInput] = useState('');
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
      <CredentialsField
        placeholder="tester"
        iconField={IconUser}
        value={value}
        onChange={event => {
          setValue(event.target.value);
        }}
      />
      <FormButton>Test1</FormButton>
      <InvertedButton>Inversé</InvertedButton>
      <ButtonSecondary>
        <img src={IconUser} alt="" />
        ButtonSecondary
      </ButtonSecondary>
      <FormInput
        label="tester01"
        value={valueInput}
        onChange={event => {
          setValueInput(event.target.value);
        }}
        placeholder="tester01"
      />
      <BlockMenu />
    </Wrapper>
  );
}

OmdbPage.propTypes = {};

export default OmdbPage;
