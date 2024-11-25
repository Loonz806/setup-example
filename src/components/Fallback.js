import React from "react";
import PropTypes from "prop-types";

const Fallback = ({ fallBackMessage }) => {
  return <div data-testid="default-fallback">{fallBackMessage}</div>;
};

Fallback.defaultProps = {
  fallBackMessage: "oops! something went wrong",
};
Fallback.propTypes = {
  fallBackMessage: PropTypes.string,
};

export default Fallback;
