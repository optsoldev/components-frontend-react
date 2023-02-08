export const BASE_CONFIG = {
  App: {
    Version: process.env.REACT_APP_VERSION,
    Name: process.env.REACT_APP_NAME,
  },
  Api: {
    BaseUrl: process.env.REACT_APP_BASE_API_URL,
  },
} as const;
