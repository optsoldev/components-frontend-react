export const BASE_CONFIG = {
  Enviroment: import.meta.env.NODE_ENV,
  App: {
    Version: import.meta.env.VITE_APP_VERSION,
    Name: import.meta.env.VITE_APP_NAME
  },
  Api: {
    BaseUrl: import.meta.env.VITE_APP_BASE_API_URL
  }
} as const;
