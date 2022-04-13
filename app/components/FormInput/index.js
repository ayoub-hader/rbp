import React from 'react';
import PropTypes from 'prop-types';

function FormInput({ register, error, label, type }) {
  return (
    <>
      <label data-testid="label">{label}</label>
      <input {...register(label)} type={type} data-testid="input" />
      {error && <div data-testid="error">{error.message}</div>}
    </>
  );
}

FormInput.propTypes = {
  register: PropTypes.func,
  error: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default FormInput;
