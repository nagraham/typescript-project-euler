import "jasmine";
import * as Strings from "../../src/lib/strings";

describe("count", () => {
  const lowercaseRegex: RegExp = new RegExp("[a-z]");
  describe("and when the whole string contains matching values", () => {
    it("matches the length", () => {
      expect(Strings.count("helloworld", lowercaseRegex)).toEqual(10);
    });
  });
  describe("and when the string contains some non-matching characters", () => {
    it("returns the number of matching characters", () => {
      expect(Strings.count("H#ll0 W'rld", lowercaseRegex)).toEqual(5);
    });
  });
  describe("and when the string doesn't contain any matching characters", () => {
    it("returns zero", () => {
      expect(Strings.count("HELLO WORLD", lowercaseRegex)).toEqual(0);
    });
  });
  describe("when a regular expression parameter is not provided", () => {
    it("returns the length of the string", () => {
      expect(Strings.count("H#ll0 W'rld")).toEqual(11);
    });
  });
});

describe("isPalindrome", () => {
  describe("when the string is a palindrome", () => {
    it("returns true", () => {
      expect(Strings.isPalindrome("racecar")).toBe(true);
    });
  });
  describe("when the string is not a palindrome", () => {
    it("returns false", () => {
      expect(Strings.isPalindrome("hello world")).toBe(false);
    });
  });
  describe("when the string is a single letter", () => {
    it("returns true", () => {
      expect(Strings.isPalindrome("a")).toBe(true);
    });
  });
  describe("when the string is blank", () => {
    it("returns true", () => {
      expect(Strings.isPalindrome("")).toBe(true);
    });
  });
});

describe("toNumbers", () => {
  describe("when the delimiter is not provided", () => {
    it("defaults to split each character", () => {
      expect(Strings.toNumbers("123")).toEqual([1, 2, 3]);
    });
  });
  describe("when the delimiter is provided", () => {
    it("defaults to split by the delimiter", () => {
      expect(Strings.toNumbers("1 2 3", " ")).toEqual([1, 2, 3]);
      expect(Strings.toNumbers("1,2,3", ",")).toEqual([1, 2, 3]);
      expect(Strings.toNumbers("1+2+3", "+")).toEqual([1, 2, 3]);
    });
  });
});
