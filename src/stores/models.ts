/* eslint-disable @typescript-eslint/no-explicit-any */
export type BaseState<T> = {
  isLoading: boolean;
  response: T;
  error?: any;
};
