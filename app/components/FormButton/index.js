/**
 *
 * FormButton
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  height: 43px;
  cursor: pointer;
  text-align: center;
  letter-spacing: 0;
  text-transform: uppercase;
  box-shadow: inset 0px 0px 6px #00000029;
  border: 1px solid ${props => props.theme.colors.main};
  border-radius: 5px;
  width: 100%;
`;

export const InvertedButton = styled(Button)`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.main};
  border: 1px solid ${props => props.theme.colors.main};
`;
export const ButtonSecondary = styled(Button)`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
`;
function FormButton() {
  return <Button />;
}

FormButton.propTypes = {};

export default Button;
