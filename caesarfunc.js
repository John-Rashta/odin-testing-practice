export default function caesarCipher(sentence, code) {
    const caesarLower = function caesarLowerCaseChar(charCode, code) {
        const realIncrement = ((charCode + code) - 19) % 26;
        return 97 + realIncrement;
    }
    
    const caesarUpper = function caesarUpperCaseChar(charCode, code) {
        const realIncrement = ((charCode + code) - 13) % 26;
        return 65 + realIncrement;
    }

    const checkIfLetter = function checkIfCharIsALetter(char) {
        return char.toUpperCase() === char.toLowerCase();
    }

    const caesarThis = function ceasarACharacter(char, code) {
        const charCode = char.charCodeAt(0);
        if (checkIfLetter(char)) {
            return charCode;
        }
        if (charCode > 96) {
            return caesarLower(charCode, code);
        }

        return caesarUpper(charCode, code);
    }

    const arrayFromSentence = Array.from(sentence);
    const finalArray = arrayFromSentence.map((value ) => {
        return caesarThis(value, code);
    });

    return String.fromCharCode(...finalArray);
};