/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { axiosInstance } from '@utils/axios-instance';
import API_ENDPOINTS from '@config/endpoints/user';
import { userAction } from './index';
import * as action from './action';

export function* fetchUserById({
  payload,
}: ReturnType<typeof action.fetchUsers>): Generator {
  try {
    yield put(userAction.fetchUserRequest());
    const response = yield call(axiosInstance.get, API_ENDPOINTS.LIST, {
      params: payload,
    });

    const responseData = (response as any).data;
    yield put(userAction.fetchUserSuccess(responseData));
  } catch (e) {
    yield put(userAction.fetchUserFail(e));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(action.fetchUsers, fetchUserById)]);
}
