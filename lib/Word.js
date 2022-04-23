const Letter = require("./Letter");

class Word extends Letter {
    constructor(letters) {
        const char = letters.split('');
        // ['h', 'i']
        for(let i = 0; i < char.length; i++) {
            let letterObj = new Letter(char[i]);
            char[i] = letterObj;
        };
        // [{ char: 'h', visible: false}, { char: 'i', visible: false}]
        super(char);

        this.letters = char;
    };

    guessLetter(letter) {
        for (let i = 0; i < this.letters.length; i++) {
            if (this.letters[i].char === letter) {
                return true
            }
        }
        return false
    };

    guessCorrectly() {
        // construct a for loop that iterates through each letter of the word
            //with each iteration we'll take the letter they guessed and pass it through the guessLetter function
            // if boolean returned from function is false...





        // if (guessLetter() && ) {
        //     return true;
        // }
    }
};

module.exports = Word;

// const wordObj = new Word();

// wordObj = {
//     letters: [{ char: 'h', visible: false}, { char: 'i', visible: false}]
// }
