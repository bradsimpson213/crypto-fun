// For more info on the Ceasar Cipher (or Shift Cipher) check out the below link
// https://en.wikipedia.org/wiki/Caesar_cipher

class Affine {
    // class to encrypt and decrypt Affine cipher messages based off a multiple
    // and a shift, and brute force hack them.  Shift should be a function!
    constructor(shiftMultipler, shiftAddend){
        this.shiftMultipler = shiftMultipler;
        this.shiftAddend = shiftAddend;
        this.letters = ["A", "B", "C", "D", "E", "F", "G",
                        "H", "I", "J", "K", "L", "M", "N",
                        "O", "P", "Q", "R", "S", "T", "U",
                        "V", "W", "X", "Y", "Z"]
    }

    getShift() {
        // returns a text representation of the shift function
        return `Value * ${this.shiftMultipler} + ${this.shiftAddend}`;
    }

    setShift(multipler, addend) {
        // takes in a multipler and addend to set the new shift 
        this.shiftMultipler = multipler;
        this.shiftAddend = addend;
    }

    encrypt(message){
        // encrypt will take in a message and return the encrypted message using
        // the shift set as the class attribute
        let array = message.toUpperCase().split('')
        let filterArray = array.filter( ele => this.letters.includes(ele) || ele === " ");

        let encryptArray = filterArray.map(letter => {
            if (letter === " ") {
                return " ";
            } 
            let letterIndex = this.letters.indexOf(letter);
            let shift = (((this.shiftMultipler * letterIndex) + this.shiftAddend) % 26);
            console.log(shift);
            return this.letters[shift];
        });
    return encryptArray.join("")
    }

    decrypt(message){
        // dencrypt will take in an encrypted message and return the original
        // message using the shift set as the class attribute
        let devisor = this.shiftMultipler;
        let subtrahend = this.shiftAddend;
        let array = message.toUpperCase().split('')

        let decryptArray = array.map(letter => {
            if (letter === " ") {
                return " ";
            } 
            let letterIndex = this.letters.indexOf(letter)
            let letterShift = (((letterIndex - subtrahend) / devisor));
            console.log(letterShift)
            if (letterShift < 0) {
                letterShift = 26 + letterShift;
            } 
            return this.letters[letterShift];
        });
        return decryptArray.join("");
    }


    crackCipher(message){
    
    }
}


const affine1 = new Affine(3, 2);
console.log(affine1.encrypt("ABCDEFGHIGHLKNOPQRSTUVWXYZ"));
console.log(affine1.decrypt("CFILORUXAUXJGPSVYBEHKNQTWZ"));