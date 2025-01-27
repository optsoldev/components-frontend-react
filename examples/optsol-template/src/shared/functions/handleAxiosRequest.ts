import { InternalAxiosRequestConfig } from 'axios';

const handleAxiosRequest = async <T>(
  request: InternalAxiosRequestConfig<T>
) => {
  const accessToken = undefined;

  if (!accessToken) return request;

  return {
    ...request,
    headers: Object.assign(
      { Authorization: `Bearer ${accessToken}` },
      request.headers
    )
  };
};

export default handleAxiosRequest;
