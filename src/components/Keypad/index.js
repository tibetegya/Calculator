import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { actions } from "./keypadSlice";
import Key from "../Key";
import KEYS from "../../utils/keys";
import { Wrapper } from "./styles";

const Keypad = props => {
  const dispatch = useDispatch();
  const handleKeyPress = (event, num) => {
    event.preventDefault();
    if (num.isControl) {
      dispatch(actions.controlIsPressed(num.value));
    } else {
      dispatch(actions.digitIsPressed(num.value));
    }
  };
  return (
    <Wrapper className="tiles keypad">
      {KEYS.map(key => (
        <Key key={key.id} num={key} handleKeyPress={handleKeyPress} />
      ))}
    </Wrapper>
  );
};

Keypad.propTypes = {
  handleKeyPress: PropTypes.func.isRequired
};
export default Keypad;
