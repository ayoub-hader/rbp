/**
 *
 * SearchInput
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
`;

export default function SearchInput({ placeholder, handleSearch }) {
  const searchRef = useRef();
  const handleClick = () => handleSearch(searchRef.current.value);
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch(searchRef.current.value);
    }
  };
  return (
    <Wrapper>
      <input
        ref={searchRef}
        type="search"
        placeholder={placeholder}
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={handleClick}>
        Search
      </button>
      <p>tester font</p>
    </Wrapper>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
};
