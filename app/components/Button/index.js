import React from 'react';
import PropTypes from 'prop-types';

function Button({ value }) {
  return (
    <button type="submit" data-testid="button">
      {value}
    </button>
  );
}

Button.prototype = {
  value: PropTypes.string,
};

export default Button;
