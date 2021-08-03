// For more info on the Ceasar Cipher (or Shift Cipher) check out the below link
// https://en.wikipedia.org/wiki/Affine_cipher

class Affine {
    // class to encrypt and decrypt Affine cipher messages based off a multiple
    // and a shift, and brute force hack them.  The multiplier must be a coprime
    // with 26 (the the total number of characters) for it to be guaranteed to
    // decrypt
    constructor(shiftMultiplier, shiftAddend){
        this.shiftMultiplier = shiftMultiplier;
        this.shiftAddend = shiftAddend;
        this.coprimes = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25]
        this.letters = ["A", "B", "C", "D", "E", "F", "G",
                        "H", "I", "J", "K", "L", "M", "N",
                        "O", "P", "Q", "R", "S", "T", "U",
                        "V", "W", "X", "Y", "Z"]
        this.letterFrequency = {
            A: 8.12, B: 1.49, C: 2.71, D: 4.32, E: 12.02, F: 2.30, 
            G: 2.03, H: 5.92, I: 7.31, J: 0.10, K: 0.69, L: 3.98,
            M: 2.61, N: 6.95, O: 7.68, P: 1.82, Q: 0.11, R: 6.02,
            S: 6.28, T: 9.10, U: 2.88, V: 1.11, W: 2.09, X: 0.17,
            Y: 2.11, Z: 0.07 }
        if (!this.coprimes.includes(this.shiftMultiplier)){
            throw new Error("The shift multiplier must be a coprime with 26!")
        }
    }

    getShift() {
        // returns a text representation of the shift 
        return `Value * ${this.shiftMultiplier} + ${this.shiftAddend}`;
    }

    setShift(multiplier, addend) {
        // takes in a multipler and addend to set the new shift
        if (!this.coprimes.includes(multiplier)){
            throw new Error("The shift multiplier must be a coprime with 26!")
        } else {
            this.shiftMultiplier = multiplier;
            this.shiftAddend = addend % 26;
        }
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
            console.log(this.shiftMultiplier * letterIndex + this.shiftAddend)
            return this.letters[((this.shiftMultiplier * letterIndex + this.shiftAddend)) % 26];
        });
    return encryptArray.join("")
    }

    decrypt(message){
        // dencrypt will take in an encrypted message and return the original
        // message using the shift set as the class attribute
        let multiplierInverse = 1
	
        for (let i = 1; i <= 25; i++) {
            if ( (this.shiftMultiplier * i) % 26 == 1 ) { 
                multiplierInverse = i;
             }
        }

        let array = message.toUpperCase().split('')
       
        let decryptArray = array.map(letter => {
            if (letter === " ") {
                return " ";
            } 
            let letterIndex = this.letters.indexOf(letter)
            let letterShift = (multiplierInverse * (letterIndex + 26 - this.shiftAddend)) % 26;
            return this.letters[letterShift];
        });
        return decryptArray.join("");
    }

    crackCipher(message){
        let array = message.toUpperCase().split('')
        let filterArray = array.filter( ele => ele !== " ");
        let testData = this.sortLetters(filterArray);
        console.log(testData);
    }

    sortLetters(message){
        
        let stringObject = {};
       
        for (let i = 0; i < message.length; i++) {
            let currentLetter = message[i];
        
            if (stringObject[currentLetter] === undefined) {
            stringObject[currentLetter] = 1;
            } else {
            stringObject[currentLetter] += 1;
            }
        }
        return stringObject;
    }


}



const affine1 = new Affine(3, 2);
console.log(affine1.encrypt("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
console.log(affine1.decrypt("CFILORUXADGJMPSVYBEHKNQTWZ"));
console.log(affine1.encrypt('The quick brown fox jumps expertly over the lazy red dog'))
console.log(affine1.decrypt("HXO YKAIG FBSQP RST DKMVE OTVOBHJW SNOB HXO JCZW BOL LSU"));
console.log(affine1.crackCipher("HXO YKAIG FBSQP RST DKMVE OTVOBHJW SNOB HXO JCZW BOL LSU"))