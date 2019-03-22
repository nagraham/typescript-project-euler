import "jasmine";
import { BigInt } from "../../src/lib/bigint";

describe("BigInt", () => {
  const biggerThanMax: BigInt = BigInt.valueOf("9007199254740992");

  describe("add()", () => {
    describe("with simple values", () => {
      it("returns the sum", () => {
        expect(BigInt.valueOf(2).add(BigInt.valueOf(2)).toString()).toEqual("4");
      });
    });
    describe("with a basic carry", () => {
      it("returns the sum", () => {
        expect(BigInt.valueOf(9).add(BigInt.valueOf(1)).toString()).toEqual("10");
      });
    });
    describe("with a chain of carries after the shortest number is finished", () => {
      it("returns the sum", () => {
        expect(BigInt.valueOf(9924).add(BigInt.valueOf(96)).toString()).toEqual("10020");
      });
    });
    describe("with zeroes", () => {
      it("returns the sum", () => {
        expect(BigInt.valueOf(0).add(BigInt.valueOf(0)).toString()).toEqual("0");
        expect(BigInt.valueOf(2).add(BigInt.valueOf(0)).toString()).toEqual("2");
        expect(BigInt.valueOf(0).add(BigInt.valueOf(2)).toString()).toEqual("2");
      });
    });
  });

  describe("multiply()", () => {
    describe("when either value is 0", () => {
      it("returns 0", () => {
        expect(BigInt.valueOf(0).multiply(BigInt.valueOf(42)).toString()).toEqual("0");
        expect(BigInt.valueOf(42).multiply(BigInt.valueOf(0)).toString()).toEqual("0");
      });
    });
    describe("with a single digit multiplier", () => {
      it("returns the correct product", () => {
        expect(BigInt.valueOf(8).multiply(BigInt.valueOf(1)).toString()).toEqual("8");
        expect(BigInt.valueOf(1).multiply(BigInt.valueOf(8)).toString()).toEqual("8");
        expect(BigInt.valueOf(8).multiply(BigInt.valueOf(8)).toString()).toEqual("64");
        expect(BigInt.valueOf(77).multiply(BigInt.valueOf(7)).toString()).toEqual("539");
        expect(BigInt.valueOf(1024).multiply(BigInt.valueOf(8)).toString()).toEqual("8192");
      });
    });
    describe("with a multi-digit multiplier", () => {
      describe("and with simple values", () => {
        it("returns the correct product", () => {
          expect(BigInt.valueOf(16).multiply(BigInt.valueOf(16)).toString()).toEqual("256");
        });
      });
      describe("and with large values", () => {
        it("returns the correct product", () => {
          expect(BigInt.valueOf(1048576).multiply(BigInt.valueOf(1048576)).toString())
            .toEqual("1099511627776");
        });
      });
    });
  });

  describe("toString()", () => {
    describe("small int", () => {
      it("returns the integer value as a string", () => {
        expect(BigInt.valueOf("42").toString()).toEqual("42");
      });
    });
    describe("big int", () => {
      it("returns the integer value as a string", () => {
        expect(biggerThanMax.toString()).toEqual("9007199254740992");
      });
    });
    describe("empty", () => {
      it("returns the integer value as a string", () => {
        expect(new BigInt([]).toString()).toEqual("0");
      });
    });
  });

  describe("valueOf()", () => {
    describe("with a string", () => {
      it("returns the big int with the given value", () => {
        expect(BigInt.valueOf("42").toString()).toEqual("42");
      });
      describe("with zero", () => {
        it("returns a big int the represents zero", () => {
          expect(BigInt.valueOf("0").toString()).toEqual("0");
        });
      });
    });
    describe("with a number", () => {
      it("returns the big int with the given value", () => {
        expect(BigInt.valueOf(42).toString()).toEqual("42");
      });
      describe("with zero", () => {
        it("returns a big int the represents zero", () => {
          expect(BigInt.valueOf(0).toString()).toEqual("0");
        });
      });
    });
  });
});
