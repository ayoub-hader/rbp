/**
 *
 * LinkMenu
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
// import styled from 'styled-components';

function LinkMenu({ icon, text, path }) {
  return (
    <Wrapper>
      <Link to={path} title={text}>
        <span>
          <img src={icon} alt={text} />
        </span>
        {text}
      </Link>
    </Wrapper>
  );
}

LinkMenu.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
};

export default LinkMenu;
