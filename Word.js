'use strict';
// import Letter from "./Letter"; // Not supported in node yet
const Letter = require("./Letter");

class Word {
    constructor(word) {
        this.value = word.split('');
        // console.log(this.value);
        this.letters = [];
        for (var letter in this.value) {
            let placeHolder = new Letter(this.value[letter]);
            this.letters.push(placeHolder);
        }
        console.log(this.letters);
        this.showString = [];
        this.guessed = false;
        this.goodjob = false;
        this.found = 0;
    }

    getWord() {
        this.showString = [];
        for (var letter in this.letters) {
            let bucket = this.letters[letter].getValue();
            this.showString.push(bucket);
        }
        console.log(this.showString.join(''));
        return this.showString.join('');
    }
    testLetter(testInput, tries) {
        this.found = 0;
        for (var letter in this.letters) {
            this.letters[letter].testValue(testInput);
            if (this.letters[letter].testValue(testInput)) {
                this.found++
            }
        }
        if (this.found > 0 ) {
            console.log(`Found ${this.found} instances.`)
            return tries;
        } else {
            tries = (tries - 1)
            console.log(`Letter not found, ${tries} tries left.`)
            return tries;
        }

    }
}

// let tom = new Word("But what about a bunch of words");
// tom.getWord();
// tom.testLetter('a');
// tom.testLetter('b');
// tom.testLetter('x');
// tom.testLetter('w')
// tom.testLetter('b')
// tom.getWord();

module.exports = Word;