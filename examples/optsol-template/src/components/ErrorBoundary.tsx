import { Box, Typography } from '@mui/material';
import { Component, PropsWithChildren } from 'react';

import AppError from '../assets/application-error.svg';
import { Colors } from '../shared/colors';

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
      return (
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            px={6}
            py={12}
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              color="secondary"
              variant="h4"
              fontWeight="bold"
              textAlign="center"
            >
              Algo deu errado!
            </Typography>
            <Typography
              mt={2}
              px={2}
              variant="body1"
              fontSize="1.5rem"
              textAlign="center"
              color={Colors.gray1}
            >
              {this.state.error?.message}
            </Typography>
          </Box>
          <Box
            flex={1}
            height={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img src={AppError} alt="error" />
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}
