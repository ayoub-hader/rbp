/**
 *
 * BlockMenu
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectBlockMenu from './selectors';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';
import MenuList from '../../components/MenuList';

const stateSelector = createStructuredSelector({
  blockMenu: makeSelectBlockMenu(),
});

function BlockMenu() {
  useInjectReducer({ key: 'blockMenu', reducer });
  useInjectSaga({ key: 'blockMenu', saga });

  /* eslint-disable no-unused-vars */
  const { blockMenu } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <Wrapper>
      <MenuList />
    </Wrapper>
  );
}

BlockMenu.propTypes = {};

export default BlockMenu;
