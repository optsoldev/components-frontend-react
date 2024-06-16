import { Component, PropsWithChildren } from 'react';

interface Props {
  component?: string;
}
interface State {
  hasError: boolean;
  error?: {
    message?: string;
  };
}

export class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error: {
        message: error.message
      }
    };
  }

  render() {
    if (this.state.hasError) {
      return <span>Errou! Faz de novo, faz direito!</span>;
    }

    return this.props.children;
  }
}
