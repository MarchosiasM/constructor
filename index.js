'use strict';
const Word = require('./Word');
const inquirer = require("inquirer")

const options = ["oh my glob", "mathematical", "what the stuff", "Homies help homies", "algebraic", "floop the pig", "UNNACCEPTABLE!", "Easy as childbirth", "That's some funky junk, brother", "Before you talk to the chief, you must party with the chief"]
let gameWord = [];
let tries = 7;

function initializeGame() {
    var selection = options[Math.floor(Math.random() * options.length)]
    gameWord = new Word(selection)
    console.log("Welcome to the Adventure Time phrase guess game!")
    console.log("You'll be given a random phrase from adventure time, try to guess it by guessing the letters, you get seven wrong guesses.")
    console.log("")
    console.log(gameWord.getWord())
    runGame();
}

function runGame() {
    inquirer.prompt([{
        name: "guess",
        message: "What is your guess?"
    }]).then(function (answers) {
        tries = gameWord.testLetter(answers.guess, tries)
        console.log(gameWord.getWord())
        console.log("You have " + tries + " tries")
        if (!gameWord.guessed && tries > 0) {
            runGame();
            return;
        };
        if (tries > 0) {
            console.log("Congratulations, you've guessed it.")
            return;
        }
        console.log("You are out of tries!")
        console.log("The phrase was " + gameWord.getFullWord())
    });
};

initializeGame();