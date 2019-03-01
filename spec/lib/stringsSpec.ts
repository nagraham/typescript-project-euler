import "jasmine";
import * as Strings from "../../src/lib/strings";

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
