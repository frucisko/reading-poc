import { call, put, select, take, takeEvery } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import * as actions from '../actions/app'

const moreWords = state => state.word.words && state.word.words.length > state.word.currentWordIndex + 1;

function countdown(seconds) {
    let guard = seconds;

    return eventChannel((emitter) => {
        const intervalId = setInterval(() => {
            guard -= 1;
            if (guard > 0) {
                emitter(guard);
            } else {
                emitter(END);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    });
}

function* firstWord() {
    if (yield select(moreWords)) {
        yield call(nextWord);
    } else {
        yield put(actions.noMoreWords());
    }
}

function* nextWord() {
    if (yield select(moreWords)) {
        yield put(actions.showWord());

        const countdownChannel = yield call(countdown, 3);
        try {
            for (;;) {
                yield take(countdownChannel);
            }
        } finally {
            yield put(actions.requestMp3());
        }

    } else {
        yield put(actions.noMoreWords());
    }
}

function* playMp3() {
    yield put(actions.playMp3());

    const countdownChannel = yield call(countdown, 3);
    try {
        for (;;) {
            yield take(countdownChannel);
        }
    } finally {
        yield put(actions.requestImage());
    }
}

function* showImage() {
    yield put(actions.showImage());

    const countdownChannel = yield call(countdown, 3);
    try {
        for (;;) {
            yield take(countdownChannel);
        }
    } finally {
        yield put(actions.nextWord());
    }
}

export default function* selectNextRootSaga() {
    yield takeEvery(actions.WORDS_LOADED, firstWord);
    yield takeEvery(actions.NEXT_WORD, nextWord);
    yield takeEvery(actions.REQUEST_MP3, playMp3);
    yield takeEvery(actions.REQUEST_IMAGE, showImage);
};