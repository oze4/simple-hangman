import React, { Component } from 'react'
import HangmanLetter from '../HangmanLetter'


export default class HangmanWord extends Component {
    render() {
        let letters = this.props.word.split("");
        let lettersToShow = this.props.showLetters;
        return (
            <div>
                {letters.map(letter => {
                    let ucase = letter.toUpperCase();
                    let show = lettersToShow.includes(ucase);
                    return <HangmanLetter letter={ucase} isShown={show} />;
                })}
            </div>
        );
    }
}