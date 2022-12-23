/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { BaseState } from 'stores/models';

export type UserState = BaseState<any>;

const initialState: UserState = {
  isLoading: true,
  error: undefined,
  response: {
    id: 0,
    email: '',
    password: '',
  },
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState: initialState,
  reducers: {
    fetchUserRequest(state) {
      state.isLoading = false;
      return state;
    },
    fetchUserSuccess(state, action) {
      state = {
        ...state,
        isLoading: false,
        response: action.payload,
      };
      return state;
    },
    fetchUserFail(state, action) {
      state = {
        ...state,
        isLoading: false,
        error: action.payload,
      };

      return state;
    },
  },
});

export const userAction = userReducer.actions;
export default userReducer.reducer;
