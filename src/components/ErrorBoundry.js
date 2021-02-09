/* eslint-disable react/prop-types */
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
    const { fallback } = props;
    if (fallback === undefined) {
      console.warn("ErrorBoundary fallback not set!");
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error) {
    const message = `Unable to render: ${error}`;
    console.error(message);
  }

  render() {
    const { hasError } = this.state;
    const { children = null, fallback = null } = this.props;
    if (hasError) {
      return fallback;
    }
    return children;
  }
}

export default ErrorBoundary;
