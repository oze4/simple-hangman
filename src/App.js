import React, { Component } from 'react';
import words from './api';
import HangmanAlphabet from './components/HangmanAlphabet';
import HangmanGuesses from './components/HangmanGuesses';
import HangmanWord from './components/HangmanWord';
import { base, style } from './css.js';


export default class App extends Component {
    defaultState = {
        word: "",
        color: 'red',
        correctGuesses: 0,
        guessedLetters: [],
        tries: 8,
        key: 1,
        isWinner: false,
    }

    state = this.defaultState
    componentDidMount = () => this.resetState();

    resetState = () => {
        this.setState({
            ...this.defaultState,
            key: Math.floor(Math.random() * 999)
        }, () => this.getWord())
    }

    getWord = () => {
        this.setState({
            word: words[Math.floor(Math.random() * words.length)]
        });
    };

    handleGameLoss = () => {
        alert("GAME OVER! :( YOU LOSE :(");
        this.resetState();
    }

    handleGameWin = () => {
        this.setState({
            color: 'green',
            isWinner: true,
        }, () => alert("WINNER WINNER WINNER!!!"))
    }

    checkGameStatus = () => {
        console.log(this.state);
        if (this.state.word.length === this.state.correctGuesses) {
            this.handleGameWin();
        }
        else if (this.state.tries === this.state.guessedLetters.length) {
            this.handleGameLoss();
        }
    }

    handleGuess = letter => {
        let matches = this.state.word.toUpperCase().match(new RegExp(letter, "g"))
        let matchesCount = matches ? matches.length : 0;
        console.log(matchesCount);
        this.setState({
            guessedLetters: [letter, ...this.state.guessedLetters],
            correctGuesses: this.state.correctGuesses + matchesCount
        }, () => this.checkGameStatus())
    }

    render() {
        return (
            <div>
                <div style={style.wrapper}>
                    <HangmanGuesses
                        isWinner={this.state.isWinner}
                        count={this.state.tries}
                        usedGuesses={this.state.guessedLetters.length}
                        color={this.state.color} />
                </div>
                <div style={base}>
                    <div style={style.main}>
                        <HangmanWord word={this.state.word} showLetters={this.state.guessedLetters} />
                        <HangmanAlphabet key={this.state.key} onClick={this.handleGuess} />
                    </div>
                </div>
                <div style={{ ...base, marginTop: '10px' }}>
                    <button disabled={!this.state.isWinner} onClick={this.resetState}>RESET GAME</button>
                </div>
            </div>
        );
    }
}