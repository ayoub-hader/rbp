/**
 *
 * CredentialsField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

function CredentialsField({
  placeholder,
  value,
  iconField,
  txtIconField,
  onChange,
}) {
  return (
    <Wrapper>
      <img src={iconField} alt={txtIconField} />
      <input
        value={value || ''}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Wrapper>
  );
}

CredentialsField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconField: PropTypes.string,
  txtIconField: PropTypes.string,
  onChange: PropTypes.object,
};

export default CredentialsField;
