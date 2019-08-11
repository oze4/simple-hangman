import React, { Component } from 'react';
import style from './css.js';


export default class HangmanAlphabet extends Component {
    handleClick = (event, letter) => {
        event.target.disabled = true;
        this.props.onClick(letter);
    }

    render() {
        let toRender = [];
        for (let i = 65; i < 91; i++) {
            let letter = String.fromCharCode(i);
            toRender.push(
                <button
                    onClick={(e) => this.handleClick(e, letter)}
                    style={style.btn}>
                    {letter}
                </button>
            );
        }

        return <div style={style.alphaContainer}>{toRender}</div>;
    }
}