import React, { Component, Fragment } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Fragment>
          <div>
            <h1> Oop! Something went wrong! Noooooooooooo</h1>
          </div>
        </Fragment>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
