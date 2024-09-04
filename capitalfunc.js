export default function capitalize(sentence) {
    const trimedSentence = sentence.trim();
    const upperSentence = trimedSentence.charAt(0).toUpperCase() + trimedSentence.slice(1);
    return upperSentence;
}