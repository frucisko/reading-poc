/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[React]" }] */
import { h, Component, React } from 'preact';
import Sound from 'react-sound';
import '../assets/css/Word.css';
// import logo from '../assets/img/mama.jpg';
// import style from './PopupA.module.scss';

export const Word = ({ word, display, end }) => {
    const imgPath = `/img/${word}.jpg`;
    const mp3Path = `/mp3/${word}.mp3`;

    return (
        <div className="word">
            { !end && display === 'text' && (
                <p> {word} </p>
            )}

            { !end && display === 'music' && (
                <p>
                    {word}
                    <Sound
                        url={mp3Path}
                        playStatus={Sound.status.PLAYING}
                        // onLoading={this.handleSongLoading}
                        // onPlaying={this.handleSongPlaying}
                        // onFinishedPlaying={this.handleSongFinishedPlaying}
                    />
                </p>
            )}

            { !end && display === 'image' && (
                <img src={imgPath} alt={word}/>
            )}

            { end && (
                <p> Koniec! </p>
            )}
        </div>
    );
};

export default Word;