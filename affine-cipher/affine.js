// For more info on the Ceasar Cipher (or Shift Cipher) check out the below link
// https://en.wikipedia.org/wiki/Caesar_cipher

class Affine {
    // class to encrypt and decrypt affine cipher messages based off a multiple
    // and a shift, and brute force hack them
        constructor(multiple, shift){
            this.multiple = multiple;
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
           
        }
    
        decrypt(message, shift = this.shift){
            // dencrypt will take in an encrypted message and return the original
            // message using the shift set as the class attribute
            
        }
    
        crackCipher(message){
        
        }
    }