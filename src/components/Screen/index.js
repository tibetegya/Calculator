import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { Wrapper } from "./styles";

const Screen = props => {
  const { digitSize, onScreenChange } = props;
  const { display, control } = useSelector(state => state.screen)
  return (
    <Wrapper
      className="tiles screen"
      id="screen"
      style={{ fontSize: `${digitSize}rem` }}
    >
      <div className="control">
        <span>{control}</span>
      </div>
      <form action="#">
        <input
          style={{ fontSize: `${digitSize}rem` }}
          type="number"
          defaultValue={display}
          onChange={onScreenChange}
        />
      </form>
    </Wrapper>
  );
};

Screen.propTypes = {
  display: PropTypes.string.isRequired,
  digitSize: PropTypes.string.isRequired,
  control: PropTypes.string.isRequired,
  onScreenChange: PropTypes.func.isRequired
};
export default Screen;
