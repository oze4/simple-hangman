import React, { Component } from 'react';
import base from './css.js';

export default class HangmanGuesses extends Component {
    render() {
        let toRender = [...Array(this.props.count).keys()].map(i => {
            return this.props.isWinner
                ? (<div style={{ ...base, backgroundColor: 'green', border: `1px solid green` }}>{++i}</div>)
                : i < this.props.usedGuesses
                    ? (<div style={{ ...base, backgroundColor: this.props.color, border: `1px solid ${this.props.color}` }}>{++i}</div>)
                    : (<div style={{ ...base, border: '1px solid black' }}>{++i}</div>)
        })

        return <div>GUESSES:{toRender}</div>
    }
}