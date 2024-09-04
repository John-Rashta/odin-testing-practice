import caesarCipher from "./caesarfunc";

test("1 word with cipher of 2", () => {
    expect(caesarCipher("ago", 2)).toBe("ciq");
});

test("word wrapping from z to a", () => {
    expect(caesarCipher("xyz",3)).toBe("abc");
});

test("keeping word case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("keep word case in wrapping", () => {
    expect(caesarCipher("XYZar", 3)).toBe("ABCdu");
});

test("keep punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});