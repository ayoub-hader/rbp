import React from 'react';
import PropTypes from 'prop-types';

function FormInput({ register, errors, label, type }) {
  return (
    <>
      <label>{label}</label>
      <input {...register(label)} type={type} />
      {errors && <div>{errors?.message}</div>}
    </>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
};
export default FormInput;
