/**
 *
 * MovieCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import NoPoster from 'images/NoPoster.png';
import MovieCardWrapper from './MovieCardWrapper';

const MovieCard = ({ poster, title, year }) => {
  const posterImage = poster === 'N/A' ? NoPoster : poster;
  return (
    <MovieCardWrapper>
      <div className="poster">
        <img src={posterImage} alt="no poster available" />
      </div>
      <div className="details">
        <span className="title">{title}</span>
        <span className="year">{year}</span>
      </div>
    </MovieCardWrapper>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MovieCard;
