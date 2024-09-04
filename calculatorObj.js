export default function calculator() {
    const add = function addNumbers(first, second) {
        return first + second;
    }
    
    const sub = function subtractNumbers(first, second) {
        return first - second;
    }

    const divide = function divideNumbers(first, second) {
        return first / second;
    }

    const multiply = function multiplyNumbers(first, second) {
        return first * second;
    }

    return {
        add,
        sub,
        divide,
        multiply,
    }
}