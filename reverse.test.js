import reverseIt from "./reversefunc";

test("reverse 1 word", () => {
    expect(reverseIt("hello")).toBe("olleh");
});

test("reverse 2 words", () => {
    expect(reverseIt("two words")).toBe("sdrow owt");
});