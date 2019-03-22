import "jasmine";
import { Direction } from "../../src/lib/direction";
import {  Matrix } from "../../src/lib/matrix";

describe("constructor", () => {
  describe("when given an Array whose size === row * col", () => {
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    it("creates a grid of the specified size with the given numbers", () => {
      const matrix: Matrix = new Matrix(3, 4, numbers);
      expect(matrix.get(0, 0)).toEqual(1);
      expect(matrix.get(1, 0)).toEqual(5);
      expect(matrix.get(1, 1)).toEqual(6);
      expect(matrix.get(2, 3)).toEqual(12);
    });
  });
  describe("when given an Array whose size === (row * col - 2)", () => {
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    it("creates a grid of the specified size with the given numbers", () => {
      const matrix: Matrix = new Matrix(3, 4, numbers);
      expect(matrix.get(0, 0)).toEqual(1);
      expect(matrix.get(1, 0)).toEqual(5);
      expect(matrix.get(1, 1)).toEqual(6);
      expect(matrix.get(2, 0)).toEqual(9);
      expect(matrix.get(2, 1)).toEqual(10);
      expect(matrix.get(2, 2)).toEqual(0);
      expect(matrix.get(2, 3)).toEqual(0);
    });
  });
  describe("when give an Empty array", () => {
    it("creates a grid of 0s", () => {
      const matrix: Matrix = new Matrix(3, 2, []);
      expect(matrix.get(0, 0)).toEqual(0);
      expect(matrix.get(0, 1)).toEqual(0);
      expect(matrix.get(1, 0)).toEqual(0);
      expect(matrix.get(1, 1)).toEqual(0);
      expect(matrix.get(2, 0)).toEqual(0);
      expect(matrix.get(2, 1)).toEqual(0);
    });
  });
});

describe("forEach", () => {
  const matrix: Matrix = new Matrix(2, 2, [1, 2, 3, 4]);
  it("provides each row, col, and value", () => {
    const results: number[] = [];
    matrix.forEach((row, col, value) => {
      results.push(row, col, value);
    });
    expect(results).toEqual([0, 0, 1, 0, 1, 2, 1, 0, 3, 1, 1, 4]);
  });
});

/**
 *  | 01, 02, 03, 04 |
 *  | 05, 06, 07, 08 |
 *  | 09, 10, 11, 12 |
 */
describe("getVector", () => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const matrix: Matrix = new Matrix(3, 4, numbers);
  describe("with a Right direction", () => {
    it("returns an array of numbers matching a horizontal vector", () => {
      expect(matrix.getVector(1, 1, 3, Direction.Right)).toEqual([6, 7, 8]);
    });
    describe("when size greater than elements in matrix", () => {
      it ("returns the array of numbers remaining", () => {
        expect(matrix.getVector(1, 1, 4, Direction.Right)).toEqual([6, 7, 8]);
      });
    });
  });
  describe("with a Down direction", () => {
    it("returns an array of numbers matching a vertical vector", () => {
      expect(matrix.getVector(0, 1, 3, Direction.Down)).toEqual([2, 6, 10]);
    });
    describe("when size greater than elements in matrix", () => {
      it ("returns the array of numbers remaining", () => {
        expect(matrix.getVector(0, 1, 4, Direction.Down)).toEqual([2, 6, 10]);
      });
    });
  });
  describe("with a UpperRight direction", () => {
    it("returns an array of numbers matching a diagnoal vector to the upper right", () => {
      expect(matrix.getVector(2, 1, 3, Direction.UpperRight)).toEqual([10, 7, 4]);
    });
    describe("and when size requested exceeds remaining columns in that direction", () => {
      it ("returns the array of numbers remaining", () => {
        expect(matrix.getVector(2, 2, 4, Direction.UpperRight)).toEqual([11, 8]);
      });
    });
    describe("and when size requested exceeds remaining rows in that direction", () => {
      it ("returns the array of numbers remaining", () => {
        expect(matrix.getVector(1, 1, 4, Direction.UpperRight)).toEqual([6, 3]);
      });
    });
  });
  describe("with a LowerRight direction", () => {
    it("returns an array of numbers matching a diagnoal vector to the lower right", () => {
      expect(matrix.getVector(0, 1, 3, Direction.LowerRight)).toEqual([2, 7, 12]);
    });
    describe("and when size requested exceeds remaining rows in that direction", () => {
      it ("returns the array of numbers remaining", () => {
        expect(matrix.getVector(1, 1, 3, Direction.LowerRight)).toEqual([6, 11]);
      });
    });
    describe("and when size requested exceeds remaining columns in that direction", () => {
      it ("returns the array of numbers remaining", () => {
        expect(matrix.getVector(0, 2, 3, Direction.LowerRight)).toEqual([3, 8]);
      });
    });
  });
});
