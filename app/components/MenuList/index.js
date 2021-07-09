/**
 *
 * MenuList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import LinkMenu from '../LinkMenu';
import Wrapper from './Wrapper';
import IconHome from './img/iconHome.png';
// import IconNvSimulation from './img/iconNvSimulation.png';
import IconClient from './img/iconClient.png';
import IconSimulation from './img/iconSimulation.png';
import IconNotification from './img/iconNotification.png';
import IconProfil from './img/iconProfil.png';
import IconContract from './img/iconContract.png';

function MenuList() {
  return (
    <Wrapper>
      <LinkMenu icon={IconHome} path="/" text="Home" />
      {/* <LinkMenu icon={IconNvSimulation} path="/" text="nouvelle simulation" /> */}
      <LinkMenu icon={IconClient} path="/" text="clients" />
      <LinkMenu icon={IconSimulation} path="/" text="simulations" />
      <LinkMenu icon={IconContract} path="/" text="contrats" />
      <LinkMenu icon={IconNotification} path="/" text="Notifications" />
      <LinkMenu icon={IconProfil} path="/" text="Profil" />
    </Wrapper>
  );
}

MenuList.propTypes = {};

export default MenuList;
