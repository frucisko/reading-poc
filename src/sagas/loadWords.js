import {put, takeEvery} from 'redux-saga/effects';
import * as actions from '../actions/app'
import words from '../assets/words.json';

function* loadWords() {
    yield put(actions.wordsLoaded(words));
}

export default function* loadWordsRootSaga() {
    yield takeEvery(actions.START_APP, loadWords);
};
