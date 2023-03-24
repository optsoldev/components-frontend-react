import Axios, { AxiosResponse } from "axios";

const BASE_URL = "http://localhost:5000";

export const Http = Axios.create({
  baseURL: BASE_URL,
});

export const get = <T extends object>(url: string): Promise<T> => {
  //return fetch(`${BASE_URL}${url}`).then((response) => response.json());

  return Http.get<{}, AxiosResponse<T>>(url).then((resp) => resp.data);
};
