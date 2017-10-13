/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[React]" }] */
import React, {h, Component} from 'preact';
import '../assets/css/Word.css';

class Word extends Component {
    constructor(props) {
        super(props);
        this.createjs = window.createjs;
    }

    componentDidUpdate() {
        if (this.props.display && this.props.display === 'music') {
            const { word } = this.props;
            const mp3Path = `/mp3/${word}.mp3`;

            this.createjs.Sound.registerSound(mp3Path, word);
            setTimeout(() => {
                this.createjs.Sound.play(word, {})
            }, 500);
        }
    }

    render() {
        const {
            end,
            display,
            word,
        } = this.props;

        return (
            <div className="word">
                {!end && display === 'text' && (
                    <p> {word} </p>
                )}

                {!end && display === 'music' && (
                    <p>
                        {word}
                    </p>
                )}

                {!end && display === 'image' && (
                    <img src={`/img/${word}.jpg`} alt={word}/>
                )}

                {end && (
                    <p> Koniec! </p>
                )}
            </div>
        );
    }
};

export default Word;