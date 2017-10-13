import * as actions from '../actions/app';
import arrayShuffle from 'array-shuffle';

const initialState = {
    words: [],
    display: null,
    currentWord: null,
    currentWordIndex: -1,
    end: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.WORDS_LOADED:
            return {
                ...state,
                words: arrayShuffle(action.payload.words),
            };

        case actions.SHOW_WORD:
            const selectedIndex = state.currentWordIndex + 1;

            return {
                ...state,
                currentWord: state.words[selectedIndex],
                currentWordIndex: selectedIndex,
                display: 'text',
                end: false,
            };

        case actions.SHOW_IMAGE:
            return {
                ...state,
                display: 'image',
            };

        case actions.PLAY_MP3:
            return {
                ...state,
                display: 'music',
            };

        case actions.NO_MORE_WORDS:
            return {
                ...state,
                words: [],
                currentWord: null,
                currentWordIndex: -1,
                end: true,
            };
        default:
            return state;
    }
};
