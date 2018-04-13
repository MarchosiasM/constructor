'use strict';
// import Letter from "./Letter"; // Not supported in node yet
const Letter = require("./Letter");

class Word {
    constructor(word) {
        this._word = word;
        this.value = word.split('');
        this.letters = [];
        for (var letter in this.value) {
            let placeHolder = new Letter(this.value[letter]);
            this.letters.push(placeHolder);
        }
        this.showString = [];
        this.guessed = false;
        this.found = 0;
    }

    getWord() {
        this.showString = [];
        for (var letter in this.letters) {
            let bucket = this.letters[letter].getValue();
            this.showString.push(bucket);
        }
        return this.showString.join('');
    }
    getFullWord() {
        return this._word;
    }
    testLetter(testInput, tries) {
        this.found = 0;
        for (var letter in this.letters) {
            this.letters[letter].testValue(testInput);
            if (this.letters[letter].testValue(testInput)) {
                this.found++
            }
        }
        if (this.found > 0) {
            console.log(`Congratulations!! Found ${this.found} instances.`)
            this.isDone();

            return tries;
        } else {
            tries = (tries - 1)
            console.log(`Letter not found, ${tries} tries left.`)
            return tries;
        }
    }

    isDone() {
        for (var letter in this.letters) {
            if (!this.letters[letter].show) {
                this.guessed = false;
                break;
            } else {
                this.guessed = true;
            }
        }
    }
}


module.exports = Word;