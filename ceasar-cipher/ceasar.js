class Ceasar {
// class to encrypt and decrypt ceaser cipher messages based off a shift, and brute force hack
// them
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
        for(let i = 1; i <=26; i++){
            let crack = this.decrypt(message, i);
            console.log(`With shift of ${i}: "${crack}"`)
        }
    }
}

ceaser1 = new Ceasar(4);
console.log(ceaser1.encrypt("how is it going"));
console.log(ceaser1.decrypt("LSA MW MX KSMRK"));
ceaser1.crackCipher("LSA MW MX KSMRK")