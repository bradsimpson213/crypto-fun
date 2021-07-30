// For more info on the Caesar Cipher (or Shift Cipher) check out the below link
// https://en.wikipedia.org/wiki/Caesar_cipher

class Caesar {
// class to encrypt and decrypt caesar cipher messages based off a shift, and
// brute force hack them
    constructor(shift){
        this.shift = shift;
        this.letters = ["A", "B", "C", "D", "E", "F", "G",
                        "H", "I", "J", "K", "L", "M", "N",
                        "O", "P", "Q", "R", "S", "T", "U",
                        "V", "W", "X", "Y", "Z"]
    }
    getShift() {
        return this.shift;
    }
    setShift(val) {
        // shift must be value from 0 - 25 to correspond to the alphabet with a
        // 0 index
        this. shift = val % 26
        return this.shift
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
            return this.letters[(letterIndex + this.shift) % 26];
        });
        return encryptArray.join("")
    }

    decrypt(message, shift = this.shift){
        // dencrypt will take in an encrypted message and return the original
        // message using the shift set as the class attribute
        let array = message.toUpperCase().split('')

        let decryptArray = array.map(letter => {
            if (letter === " ") {
                return " ";
            } 
            let letterIndex = this.letters.indexOf(letter)
            let letterShift = letterIndex - shift
            if (letterShift < 0) {
                letterShift = 26 + letterShift;
            } 
            return this.letters[letterShift];
        });
        return decryptArray.join("");
    }

    crackCipher(message){
        // crackCipher will console log an encryped message for each possible
        // shift, using the decrypt method as a helper function
        for(let i = 1; i <=26; i++){
            let crack = this.decrypt(message, i);
            console.log(`With shift of ${i}: "${crack}"`)
        }
    }
}

caesar1 = new Caesar(4);
console.log(caesar1.encrypt("how is it going"));
console.log(caesar1.decrypt("LSA MW MX KSMRK"));
caesar1.crackCipher("LSA MW MX KSMRK")