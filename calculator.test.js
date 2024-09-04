import calculator from "./calculatorObj";

const calc = calculator();
test("add 2 numbers", () => {
    expect(calc.add(2,3)).toBe(5);
});

test("subtract 2 numbers", () => {
    expect(calc.sub(5,3)).toBe(2);
});

test("divide 2 numbers", () => {
    expect(calc.divide(6,2)).toBe(3);
})

test("multiply 2 numbers", () => {
    expect(calc.multiply(5,3)).toBe(15);
});