import analyze from "./analyzefunc";

test("analyze array and check object values", () => {
    const testData = analyze([1,8,3,4,2,6]);
    expect(testData).toEqual({average: 4, min: 1, max: 8, length: 6,});
});

test("analyze an array with a 0", () => {
    const testData = analyze([0, 2, 3, 4, 5]);
    expect(testData).toEqual({average: 2.8, min: 0, max: 5, length: 5,});
});

test("analyze a bigger array", () => {
    const testData = analyze([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 66]);
    expect(testData).toEqual({average: 10.5, min: 0, max: 66, length: 15});
});