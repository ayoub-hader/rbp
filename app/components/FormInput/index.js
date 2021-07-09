/**
 *
 * FormInput
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
// import styled from 'styled-components';

function FormInput({ label, onChange, value, placeholder }) {
  const [isActive, setActive] = useState(false);
  const [affLabel, setAffLabel] = useState(false);
  const handleToggle = () => {
    if (!value.length > 0) {
      setActive(!isActive);
    }
  };
  const handleOnchange = () => {
    if (value.length > -1) {
      setAffLabel(true);
    } else {
      setAffLabel(false);
    }
  };
  const handleBlur = e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      if (!value.length > 0 && isActive) {
        setActive(!isActive);
        setAffLabel(false);
      }
    }
  };
  return (
    <Wrapper>
      <label
        className={(isActive ? 'active' : null, affLabel ? 'affLabel' : null)}
      >
        {label}
      </label>
      <input
        onClick={handleToggle}
        onBlur={handleBlur}
        onChange={e => {
          onChange(e);
          handleOnchange();
        }}
        value={value || ''}
        className={isActive ? 'active' : null}
        placeholder={placeholder}
      />
    </Wrapper>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.object,
};

export default FormInput;
