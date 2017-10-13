export const START_APP = 'START_APP';
export const startApp = () => ({
    type: START_APP,
    payload: { },
});

const asyncActionType = type => ({
    INIT: `${type}_INIT`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
});
export const FETCH_WORDS = asyncActionType('FETCH_WORDS');

export const fetchWords = () => ({
    init: () => ({
        type: FETCH_WORDS.INIT,
    }),
    success: payload => ({
        type: FETCH_WORDS.SUCCESS,
        payload,
    }),
    error: payload => ({
        type: FETCH_WORDS.INIT,
        payload,
    }),
});

export const WORDS_LOADED = 'WORDS_LOADED';
export const wordsLoaded = (words) => ({
    type: WORDS_LOADED,
    payload: {
        words: words,
    },
});

export const NEXT_WORD = 'NEXT_WORD';
export const nextWord = () => ({
    type: NEXT_WORD,
    payload: { },
});

export const SHOW_WORD = 'SHOW_WORD';
export const showWord = () => ({
    type: SHOW_WORD,
    payload: { },
});

export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const requestImage = () => ({
    type: REQUEST_IMAGE,
    payload: { },
});

export const SHOW_IMAGE = 'SHOW_IMAGE';
export const showImage = () => ({
    type: SHOW_IMAGE,
    payload: { },
});

export const REQUEST_MP3 = 'REQUEST_MP3';
export const requestMp3 = () => ({
    type: REQUEST_MP3,
    payload: { },
});

export const PLAY_MP3 = 'PLAY_MP3';
export const playMp3 = () => ({
    type: PLAY_MP3,
    payload: { },
});

export const NO_MORE_WORDS = 'NO_MORE_WORDS';
export const noMoreWords = () => ({
    type: NO_MORE_WORDS,
    payload: { },
});
