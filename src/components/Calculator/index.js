import React, { Component } from "react";
import { Wrapper } from "./styles";
import NotificationBar from "../NotificationBar";
import Screen from "../Screen";
import Keypad from "../Keypad";
// import digitAdder from '../../../helpers';

class Calculator extends Component {
  onScreenChange = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Wrapper>
        <NotificationBar />
        <Screen digitSize="2" onScreenChange={this.onScreenChange} />
        <Keypad />
      </Wrapper>
    );
  }
}

export default Calculator;
