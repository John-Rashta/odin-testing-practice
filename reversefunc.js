export default function reverseString(sentence) {
    const stringtoArray = Array.from(sentence);
    return stringtoArray.reverse().join("");
}