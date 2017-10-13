import {call, put, takeEvery} from 'redux-saga/effects';
import * as actions from '../actions/app'
import axios from 'axios';

function* loadWords() {
    yield put(actions.fetchWords().init());

    try {
        const {data} = yield call(axios.get, '/data/words.json');
        yield yield put(actions.wordsLoaded(data));
    } catch (e) {
        yield put(actions.fetchWords().error(e));
    }
}

export default function* loadWordsRootSaga() {
    yield takeEvery(actions.START_APP, loadWords);
};
