import * as Strings from "./strings";

/**
 * A class representing an integer with a value that can exceed 2^53
 */
class BigInt {
  // TODO: public add(other: BigInt): BigInt
  // TODO: public subtract(other: BigInt): BigInt
  // TODO: public multiply(other: BigInt): BigInt
  // TODO: public divide(other: BigInt): BigInt
  // TODO: public equals(other: BigInt): boolean

  /**
   * Creates a BigInt from a string or number value. This is the preferred method
   * for creating this BigInt.
   *
   * @param {string|number} value the string or number representation for this BigInt.
   */
  public static valueOf(value: string | number): BigInt {
    if (typeof value === "string") {
      return new BigInt(Strings.toNumbers(value));
    } else if (typeof value === "number") {
      let digits: number[] = [];
      if (value === 0) {
        digits = [0];
      } else {
        while (value > 0) {
          digits.unshift(value % 10);
          value = Math.floor(value / 10);
        }
      }
      return new BigInt(digits);
    }
    throw new Error("invalid type: expected string or number");
  }

  private nums: number[];

  /**
   * Creates a BigInt given an array with the number's digits
   *
   * Example: let b: BigInt = new BigInt([4, 2]) (a big int based on 42)
   *
   * @param {number[]} nums An array of numbers representing the digits of the integer
   */
  constructor(nums: number[]) {
    this.nums = nums;
  }

  /**
   *  Adds two BigInt values and returns the sum.
   *
   * @param {BigInt} other the other BigInt to add to this one
   */
  public add(other: BigInt): BigInt {
    return new BigInt(this.sumNumArrays(this.nums, other.nums));
  }

  /**
   * Multiplies two BigInt values and returns the product
   *
   * @param {BigInt} multiplier the multiplier that will multiply this BigInt
   */
  public multiply(multiplier: BigInt): BigInt {
    if (this.isZero() || multiplier.isZero()) {
      return BigInt.valueOf(0);
    }

    let product: number[] = [];
    let carry: number = 0;
    let count: number = 0;
    for (let i: number = multiplier.nums.length - 1; i >= 0; i--) {
      const multiplierDigit: number = multiplier.nums[i];
      const subProduct: number[] = this.newZeroList(count++);

      for (let j: number = this.nums.length - 1; j >= 0; j--) {
        const n: number = (this.nums[j] * multiplierDigit) + carry;
        subProduct.unshift(n % 10);
        carry = Math.floor(n / 10);
      }

      if (carry > 0) {
        subProduct.unshift(carry);
      }

      product = this.sumNumArrays(product, subProduct);
    }

    return new BigInt(product);
  }

  /**
   * Returns the digits of this BigInt as an array.
   */
  public toDigits(): number[] {
    return this.nums.slice(); // use slice() to return a copy
  }

  /**
   * Returns the BigInt as a string value.
   */
  public toString(): string {
    if (this.isZero()) {
      return "0";
    }
    return this.nums.map((n) => n.toString()).join("");
  }

  private newZeroList(count: number): number[] {
    const result: number[] = [];
    for (let i: number = 0; i < count; i++) {
      result.unshift(0);
    }
    return result;
  }

  private isZero(): boolean {
    return this.nums.length === 0 || this.nums.length === 1 && this.nums[0] === 0;
  }

  private sumNumArrays(numsA: number[], numsB: number[]): number[] {
    const result: number[] = [];
    let carry: number = 0;

    let a: number = numsA.length - 1;
    let b: number = numsB.length - 1;

    while (a >= 0 || b >= 0) {
      let subSum: number = carry;
      if (a >= 0) {
        subSum += numsA[a];
        a--;
      }
      if (b >= 0) {
        subSum += numsB[b];
        b--;
      }
      result.unshift(subSum % 10);
      carry = Math.floor(subSum / 10);
    }

    if (carry > 0) {
      result.unshift(carry);
    }

    return result;
  }
}

export { BigInt };
