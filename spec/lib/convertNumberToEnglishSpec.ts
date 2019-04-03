import "jasmine";
import { convertNumberToEnglish } from "../../src/lib/convertNumberToEnglish";

describe("writeNumber", () => {
  describe("when given 0", () => {
    it("returns 'zero'", () => {
      expect(convertNumberToEnglish(0)).toEqual("zero");
    });
  });
  describe("when given 1-19", () => {
    const valuesToExpectedResults: Map<number, string> = new Map([
      [1, "one"],
      [2, "two"],
      [3, "three"],
      [4, "four"],
      [5, "five"],
      [6, "six"],
      [7, "seven"],
      [8, "eight"],
      [9, "nine"],
      [10, "ten"],
      [11, "eleven"],
      [12, "twelve"],
      [13, "thirteen"],
      [14, "fourteen"],
      [15, "fifteen"],
      [16, "sixteen"],
      [17, "seventeen"],
      [18, "eighteen"],
      [19, "nineteen"],
    ]);
    it("returns the writen value as a string", () => {
      valuesToExpectedResults.forEach((output, input) => {
        expect(convertNumberToEnglish(input)).toEqual(output);
      });
    });
  });
  describe("when given a number 20 <= n < 100", () => {
    const valuesToExpectedResults: Map<number, string> = new Map([
      [20, "twenty"],
      [21, "twenty-one"],
      [22, "twenty-two"],
      [33, "thirty-three"],
      [44, "forty-four"],
      [55, "fifty-five"],
      [66, "sixty-six"],
      [77, "seventy-seven"],
      [88, "eighty-eight"],
      [99, "ninety-nine"],
    ]);
    it("returns the writen value as a string", () => {
      valuesToExpectedResults.forEach((output, input) => {
        expect(convertNumberToEnglish(input)).toEqual(output);
      });
    });
  });
  describe("when given a number 100 <= n < 1,000", () => {
    const valuesToExpectedResults: Map<number, string> = new Map([
      [100, "one hundred"],
      [101, "one hundred and one"],
      [442, "four hundred and forty-two"],
      [999, "nine hundred and ninety-nine"],
    ]);
    it("returns the writen value as a string", () => {
      valuesToExpectedResults.forEach((output, input) => {
        expect(convertNumberToEnglish(input)).toEqual(output);
      });
    });
  });
  describe("when given a number 1,000 <= n < 1,000,000", () => {
    const valuesToExpectedResults: Map<number, string> = new Map([
      [1000, "one thousand"],
      [1001, "one thousand and one"],
      [1111, "one thousand, one hundred and eleven"],
      [1234, "one thousand, two hundred and thirty-four"],
      [42042, "forty-two thousand and forty-two"],
      [100001, "one hundred thousand and one"],
      [123456, "one hundred and twenty-three thousand, four hundred and fifty-six"],
      [987000, "nine hundred and eighty-seven thousand"],
    ]);
    it("returns the writen value as a string", () => {
      valuesToExpectedResults.forEach((output, input) => {
        expect(convertNumberToEnglish(input)).toEqual(output);
      });
    });
  });
  describe("when given a number 1,000,000 <= n < 1,000,000,000", () => {
    const valuesToExpectedResults: Map<number, string> = new Map([
      [1000000, "one million"],
      [1000001, "one million and one"],
      [100000001, "one hundred million and one"],
      [987654321, "nine hundred and eighty-seven million, " +
        "six hundred and fifty-four thousand, " +
        "three hundred and twenty-one"],
    ]);
    it("returns the writen value as a string", () => {
      valuesToExpectedResults.forEach((output, input) => {
        expect(convertNumberToEnglish(input)).toEqual(output);
      });
    });
  });
  describe("when given a number 1,000,000,000 <= n < 1,000,000,000,000", () => {
    const valuesToExpectedResults: Map<number, string> = new Map([
      [1000000000, "one billion"],
      [1000000001, "one billion and one"],
      [100000000001, "one hundred billion and one"],
      [678987654321, "six hundred and seventy-eight billion, " +
        "nine hundred and eighty-seven million, " +
        "six hundred and fifty-four thousand, " +
        "three hundred and twenty-one"],
    ]);
    it("returns the writen value as a string", () => {
      valuesToExpectedResults.forEach((output, input) => {
        expect(convertNumberToEnglish(input)).toEqual(output);
      });
    });
  });
  describe("when given a number 1,000,000,000,000 <= n < 1,000,000,000,000,000", () => {
    const valuesToExpectedResults: Map<number, string> = new Map([
      [1000000000000, "one trillion"],
      [1000000000001, "one trillion and one"],
      [100000000000001, "one hundred trillion and one"],
      [345678987654321, "three hundred and forty-five trillion, " +
        "six hundred and seventy-eight billion, " +
        "nine hundred and eighty-seven million, " +
        "six hundred and fifty-four thousand, " +
        "three hundred and twenty-one"],
    ]);
    it("returns the writen value as a string", () => {
      valuesToExpectedResults.forEach((output, input) => {
        expect(convertNumberToEnglish(input)).toEqual(output);
      });
    });
  });
});
