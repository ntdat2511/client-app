import { fork, all } from 'redux-saga/effects';
import userSaga from './user/saga';

export function* rootSagas() {
  yield all([
    fork(userSaga),

    // `fork()` any other store sagas down here...
  ]);
}
