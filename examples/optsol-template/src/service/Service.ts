import axios, { AxiosResponse } from 'axios';

import { BASE_CONFIG } from '../shared/baseConfig';
import handleAxiosRequest from '../shared/functions/handleAxiosRequest';
import handleAxiosResponseError from '../shared/functions/handleAxiosResponseError';
import handleAxiosResponseSuccess from '../shared/functions/handleAxiosResponseSuccess';

const Http = axios.create();

class Service {
  public static Http = Http;
  protected static getData = getData;
  public static setBaseUrl(baseURL: string) {
    this.Http.defaults.baseURL = baseURL;
  }
}

function getData<T>(res: AxiosResponse<T>) {
  return res.data;
}

Http.defaults.baseURL = BASE_CONFIG.Api.BaseUrl;

Http.interceptors.response.use(handleAxiosResponseSuccess, handleAxiosResponseError);

Http.interceptors.request.use(handleAxiosRequest);

export default Service;
