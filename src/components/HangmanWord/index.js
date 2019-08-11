import React, { Component } from 'react'
import HangmanLetter from '../HangmanLetter'


export default class HangmanWord extends Component {
    render() {
        let letters = this.props.word.split("");
        let lettersToShow = this.props.showLetters;
        return (
            <div>
                {letters.map((letter, index) => {
                    let ucase = letter.toUpperCase();
                    let show = lettersToShow.includes(ucase);
                    return <HangmanLetter key={`${letter}_${index}`} letter={ucase} isShown={show} />;
                })}
            </div>
        );
    }
}