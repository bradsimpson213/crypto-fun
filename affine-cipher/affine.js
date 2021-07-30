// For more info on the Ceasar Cipher (or Shift Cipher) check out the below link
// https://en.wikipedia.org/wiki/Caesar_cipher

class Affine {
    // class to encrypt and decrypt Affine cipher messages based off a multiple
    // and a shift, and brute force hack them.  Shift should be a function!
    constructor(shiftMultiplier, shiftAddend){
        this.shiftMultiplier = shiftMultiplier;
        this.shiftAddend = shiftAddend;
        this.coprimes = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25]
        this.letters = ["A", "B", "C", "D", "E", "F", "G",
                        "H", "I", "J", "K", "L", "M", "N",
                        "O", "P", "Q", "R", "S", "T", "U",
                        "V", "W", "X", "Y", "Z"]
        if (!this.coprimes.includes(this.shiftMultiplier)){
            throw new Error("The shift multiplier must be a coprime with 26!")
        }
    }

    getShift() {
        // returns a text representation of the shift function
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
            
            // if (letterShift < 0) {
            //     letterShift = 26 + letterShift;
            // } 
            console.log(letterShift)
            return this.letters[letterShift];
        });
        return decryptArray.join("");
    }


    crackCipher(message){
    
    }
}


const affine1 = new Affine(3, 2);
console.log(affine1.encrypt("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
console.log(affine1.decrypt("CFILORUXADGJMPSVYBEHKNQTWZ"));