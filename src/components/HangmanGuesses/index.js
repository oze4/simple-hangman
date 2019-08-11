import React, { Component } from 'react';
import base from './css.js';

export default class HangmanGuesses extends Component {
    render() {
        let toRender = [...Array(this.props.count).keys()].map((guess, index) => {
            return index < this.props.wrongGuessCount
                ? <div key={index} style={{ ...base, backgroundColor: 'red' }}>{++guess}</div>
                : <div key={index} style={{ ...base }}>{++guess}</div>
        })

        return <div>GUESSES:{toRender}</div>
    }
}