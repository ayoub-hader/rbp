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

  return (
    <Wrapper>
      <input ref={searchRef} type="search" placeholder={placeholder} />
      <button type="button" onClick={handleClick}>
        Search
      </button>
    </Wrapper>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
};
