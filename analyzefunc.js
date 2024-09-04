export default function analyzeArray(arr) {
    const arrayLength = arr.length;
    const averageFromArray = arr.reduce((next, current) => {
        return next + current;
    }, 0) / arrayLength;

    const highestFromArray = arr.reduce((next, current) => {
        if (current > next) {
            return current;
        }

        return next;
    })

    const minimumFromArray = arr.reduce((next, current) => {
        if (current < next) {
            return current;
        }

        return next;
    })

    return {
        average: Math.round(averageFromArray * 10) / 10,
        length: arrayLength,
        max: highestFromArray,
        min: minimumFromArray,
    }
}