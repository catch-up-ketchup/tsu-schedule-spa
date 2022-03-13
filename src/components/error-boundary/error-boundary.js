import React, { Component } from 'react';

import ErrorMessage from "../error-message";


export default class ErrorBoundary extends Component {
  state = {
    error: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState(({ error: true }));
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <ErrorMessage/>;
    }

    return this.props.children;
  }
}


