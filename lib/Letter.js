const charArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

class Letter {
    constructor(char) {
        this.char = char;
        this.visible = !(charArr.includes(char));
    };
    
    toString() {
        if (charArr.includes(this.char)) {
            return '_'
        }
        return this.char
    };

    guess(char) {
        if (this.char === char) {
            return true
        }
        return false
    };

    getSolution() {
        return this.char
    };
};

module.exports = Letter;
