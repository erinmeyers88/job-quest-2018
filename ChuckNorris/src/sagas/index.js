import {all, fork} from 'redux-saga/effects';
import mainSaga from './mainSaga';

function* rootSaga() {
 yield all([
   fork(mainSaga)
 ]);
}

export default rootSaga;