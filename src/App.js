import React, { Component } from 'react';
import words from './api';
import HangmanAlphabet from './components/HangmanAlphabet';
import HangmanGuesses from './components/HangmanGuesses';
import HangmanWord from './components/HangmanWord';
import { base, style } from './css.js';


export default class App extends Component {
    defaultState = {
        word: "",
        incorrectGuesses: 0,
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
            word: words[Math.floor(Math.random() * words.length)],
            key: Math.floor(Math.random() * 999),
        })
    }

    handleGameLoss = () => {
        alert("GAME OVER! :( YOU LOSE :(");
        this.resetState();
    }

    handleGameWin = () => {
        this.setState({ isWinner: true }, () => alert("WINNER WINNER WINNER!!!"))
    }

    checkGameStatus = () => {
        if (this.state.word.length === this.state.correctGuesses) this.handleGameWin();
        else if (this.state.tries === this.state.incorrectGuesses) this.handleGameLoss();
    }

    handleGuess = letter => {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        let matches = stateCopy.word.toUpperCase().match(new RegExp(letter, "g"))
        stateCopy.guessedLetters = [letter, ...stateCopy.guessedLetters]
        let matchedCount = matches && matches.length > 0 ? matches.length : 0;
        stateCopy.correctGuesses += matchedCount;
        stateCopy.incorrectGuesses += matchedCount === 0 ? 1 : 0;
        this.setState(stateCopy, () => this.checkGameStatus())
    }

    render() {
        return (
            <div>
                <div style={style.wrapper}>
                    <HangmanGuesses count={this.state.tries} wrongGuessCount={this.state.incorrectGuesses} />
                </div>
                <div style={base}>
                    <div style={style.main}>
                        <HangmanWord word={this.state.word} showLetters={this.state.guessedLetters} />
                        <HangmanAlphabet key={this.state.key} onClick={this.handleGuess} disableAll={this.state.isWinner} />
                    </div>
                </div>
                <div style={{ ...base, marginTop: '10px' }}>
                    <button style={{ height: '30px' }} disabled={!this.state.isWinner} onClick={this.resetState}>RESET GAME</button>
                </div>
                <div style={{ ...base, marginTop: '10px' }}>
                    <small><a href="https://github.com/oze4/simple-hangman" target="_blank" rel="noopener noreferrer">GitHub Repo</a></small>
                </div>
            </div>
        );
    }
}