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
            const mp3Path = `/data/${word}.mp3`;

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
            again,
        } = this.props;

        return (
            <div>
                <div className='word'>
                    {!end && display === 'text' && (
                        <p> {word} </p>
                    )}

                    {!end && display === 'music' && (
                        <p>
                            {word}
                        </p>
                    )}

                    {!end && display === 'image' && (
                        <img src={`/data/${word}.jpg`} alt={word}/>
                    )}

                    {end && (
                        <img src='/again.png'
                             alt={word}
                             onClick={again}
                             className='again' />
                    )}
                </div>
            </div>
        );
    }
};

export default Word;