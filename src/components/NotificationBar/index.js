import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles";

const NotificationBar = props => {
  const { display } = props;
  return <Wrapper className="tiles notify">{display}</Wrapper>;
};

NotificationBar.propTypes = {
  display: PropTypes.string
};

NotificationBar.defaultProps = {
  display: ""
};

export default NotificationBar;
