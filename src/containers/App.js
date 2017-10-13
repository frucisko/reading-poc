/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[React]" }] */
import React, {h, Component} from 'preact';
import {connect} from 'preact-redux';
import {bindActionCreators} from 'redux';
import * as actions from "../actions/app";
import Word from '../components/Word';

class App extends Component {
    render() {
        const { currentWord, display, end, startApp } = this.props;

        return (
            <Word
                word={currentWord}
                display={display}
                end={end}
                again={startApp}
            />
        );
    }
}

const mapStateToProps = state => state.word;
const mapDispatchToProps = dispatch => bindActionCreators({
    ...actions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
