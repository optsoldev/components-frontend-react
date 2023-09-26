export const BASE_CONFIG = {
  Enviroment: process.env.NODE_ENV,
  App: {
    Version: process.env.REACT_APP_VERSION,
    Name: process.env.REACT_APP_NAME
  },
  Api: {
    BaseUrl: process.env.REACT_APP_BASE_API_URL,
    HubUrl: process.env.REACT_APP_BASE_NOTIFICATION_URL
  }
} as const;
