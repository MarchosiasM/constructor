'use strict';

class Letter {
    constructor(value) {
        this.value = value;
        if (value === " ") {
            this.show = true;
            return;
        }
        this.show = false;
    }
    getValue() {
        if (!this.show) {
            return "_";
        }
        return this.value;
    }
    testValue(input) {
        if (input.toLowerCase() === this.value.toLowerCase()) {
            this.show = true;
            return true;
        }
        return false
    }
}


module.exports = Letter;