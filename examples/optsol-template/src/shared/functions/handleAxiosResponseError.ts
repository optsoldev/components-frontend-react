import { AxiosError } from 'axios';

import { APIResponse } from '../../models/ApiResponse.model';

export default function handleAxiosResponseError(error: AxiosError<APIResponse<object>>) {
  if (error.response?.status === 401) {
    window.location.replace(window.location.origin);
    return;
  }

  if (error.code === 'ERR_CANCELED') return { data: {} } as APIResponse<{ data: object }>;

  const { response } = error;
  if (!response || !response.data) throw error;

  if (response.data.messages) {
    const [errorMessage] = response.data.messages;
    const [, message] = errorMessage.split(':');

    throw new Error(message);
  }
}
