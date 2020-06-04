import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const Key = ({ num, handleKeyPress }) => {
  let numClass = num.ctr ? 'key ctrl' : 'key';
  numClass = num.value === '0' ? 'fat' : numClass;

  return (
    <Wrapper
      type="button"
      name={num.value}
      value={num.value}
      className={numClass}
      onClick={e => handleKeyPress(e, num)}
    >
      {num.value}
    </Wrapper>
  );
};

Key.propTypes = {
  num: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    ctr: PropTypes.bool.isRequired,
    isControl: PropTypes.bool.isRequired,
    isDigit: PropTypes.bool.isRequired,
  }).isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};

export default Key;
