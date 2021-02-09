import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: "",
    };
  }

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices = console.log;
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  // A fake logging service 😬
  render() {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>;
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundry;
