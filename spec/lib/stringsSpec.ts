import "jasmine";
import * as Strings from "../../src/lib/strings";

describe("isPalindrome", () => {
  describe("when the string is a palindrome", () => {
    it("returns true", () => {
      expect(Strings.isPalindrome("racecar")).toBe(true);
    })
  })
  describe("when the string is not a palindrome", () => {
    it("returns false", () => {
      expect(Strings.isPalindrome("hello world")).toBe(false);
    })
  })
  describe("when the string is a single letter", () => {
    it("returns true", () => {
      expect(Strings.isPalindrome("a")).toBe(true);
    })
  })
  describe("when the string is blank", () => {
    it("returns true", () => {
      expect(Strings.isPalindrome("")).toBe(true);
    })
  })
});
