import React, { Component } from 'react';
import style from './css.js';

export default class HangmanLetter extends Component {
    render() {
        let shownLetter = this.props.isShown ? this.props.letter : "_";
        return <div style={style}>{shownLetter}</div>;
    }
}