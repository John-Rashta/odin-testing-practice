import capitalize from "./capitalfunc";

test("capitalize 1 word that is lowercase", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("capitalize 1 word that is uppercase", () => {
    expect(capitalize("BORED")).toBe("BORED");
});

test("capitalize words with extra spaces", () => {
    expect(capitalize("  ago ")).toBe("Ago");
});