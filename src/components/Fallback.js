import React from "react";
import PropTypes from "prop-types";

const Fallback = ({ message, criticalRenderPath }) => {
  return (
    <div data-testid="default-fallback">
      {criticalRenderPath && (
        <p>{message || "Something went wrong, please retry"}</p>
      )}
    </div>
  );
};

Fallback.propTypes = {
  message: PropTypes.string,
  criticalRenderPath: PropTypes.bool,
};

export default Fallback;
