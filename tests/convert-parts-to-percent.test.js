const convertPartsToPercent = require("./../convert-parts-to-percent");

const MAX_ARRAY_LENGTH = 1000000;

describe("convertPartsToPercent", () => {
  describe("Errors", () => {
    it("Argument is not array", () =>
      expect(convertPartsToPercent(true)).toThrowError(
        new Error("Invalid input: argument is not array.")
      ));
    it("Argument is array but length more then max", () =>
      expect(convertPartsToPercent(new Array(MAX_ARRAY_LENGTH))).toThrowError(
        new Error("Invalid input: exceeded array max length.")
      ));
    it("Invaid values in array - object", () =>
      expect(convertPartsToPercent(["1.5", 1.5, {}])).toThrowError(
        new Error("Invalid input: unexpected data in array.")
      ));
    it("Invaid values in array - object", () =>
      expect(convertPartsToPercent(["1.5", 1.5, {}])).toThrowError(
        new Error("Invalid input: unexpected data in array.")
      ));
    it("Invaid values in array - boolean", () =>
      expect(convertPartsToPercent(["1.5", 1.5, true])).toThrowError(
        new Error("Invalid input: unexpected data in array.")
      ));
    it("Invaid values in array - Symbol", () =>
      expect(convertPartsToPercent(["1.5", 1.5, Symbol()])).toThrowError(
        new Error("Invalid input: unexpected data in array.")
      ));
    it("Invaid values in array - null", () =>
      expect(convertPartsToPercent(["1.5", 1.5, null])).toThrowError(
        new Error("Invalid input: unexpected data in array.")
      ));
    it("Invaid values in array - undefined", () =>
      expect(convertPartsToPercent(["1.5", 1.5, undefined])).toThrowError(
        new Error("Invalid input: unexpected data in array.")
      ));
    it("Invaid values in array - function", () =>
      expect(convertPartsToPercent(["1.5", 1.5, () => 1])).toThrowError(
        new Error("Invalid input: unexpected data in array.")
      ));
  });
  describe("Calculations", () => {
    it("Array length is 0", () =>
      expect(convertPartsToPercent([])).toEqual([]));
    it("Array length is 1", () =>
      expect(convertPartsToPercent([221])).toEqual([221]));
    it("Persent of 0", () =>
      expect(convertPartsToPercent([0])).toEqual(["100.000"]));
    it("Array with even number of elements", () =>
      expect(convertPartsToPercent(["1.5", "3", "6", "1.5"])).toEqual([
        "12.500",
        "25.000",
        "50.000",
        "12.500"
      ]));
    it("Array with odd number of elements", () =>
      expect(convertPartsToPercent(["6", "8", "1"])).toEqual([
        "40.000",
        "53.333",
        "6.667"
      ]));
  });
});
