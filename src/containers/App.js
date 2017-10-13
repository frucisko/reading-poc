/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[React]" }] */
import {h, React} from 'preact';
import {connect} from 'preact-redux';
import {bindActionCreators} from 'redux';
import Word from '../components/Word';
import * as actions from '../actions/app';

export const App = (word) => {
    return (
        <Word
            word={word.currentWord}
            display={word.display}
            end={word.end}
        />
    );
};

const mapStateToProps = state => state.word;
const mapDispatchToProps = dispatch => bindActionCreators({
    ...actions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
