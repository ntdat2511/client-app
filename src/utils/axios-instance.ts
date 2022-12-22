/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { store } from '../state/';
// import getConfig from 'next/config';

// const { publicRuntimeConfig } = getConfig();

export const axiosInstance = Axios.create({
  // baseURL: `${publicRuntimeConfig.endpoint}/${publicRuntimeConfig.api_version}`,
  // timeout: publicRuntimeConfig.timeout,
  // params: {
  //   api_key: publicRuntimeConfig.api_key,
  // },
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const requestHandler = (request: AxiosRequestConfig) => {
  // Modify request here
  // const state = store.getState();
  // const token = getToken(state as any);
  const token = 'access_token';
  if (token) {
    if (request.headers) {
      request.headers.Authorization = `Bearer ${token}`;
    }
  }

  return request;
};
const errorHandler = (error: any) => {
  // Handle errors

  if (typeof error !== 'undefined') {
    // Setup Error Message
  }

  if (typeof error.response !== 'undefined') {
    // Setup Generic Response Messages
    if (error.response.status === 401) {
      // 'UnAuthorized';
    } else if (error.response.status === 404) {
      // 'API Route is Missing or Undefined';
    } else if (error.response.status === 405) {
      // 'API Route Method Not Allowed';
    } else if (error.response.status === 422) {
      // Validation Message
    } else if (error.response.status >= 500) {
      // 'Server Error';
    }

    // Try to Use the Response Message
  }
  return Promise.reject(error);
};

// Handle responses
const successHandler = (response: AxiosResponse) => response;

axiosInstance.interceptors.request.use((request) => requestHandler(request));
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error),
);
