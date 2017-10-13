import {all, put} from 'redux-saga/effects';
import loadWords from './loadWords';
import selectNextWord from './selectNextWord';
import * as appActions from '../actions/app';

function* initApp() {
    yield put(appActions.startApp());
}

function* rootSaga() {
    yield all([
        loadWords(),
        selectNextWord(),
        initApp(),
    ]);
}

export default rootSaga;
