import React from 'react';

function Button({ value }) {
  return (
    <button type="submit" data-testid="button">
      {value}
    </button>
  );
}

export default Button;
