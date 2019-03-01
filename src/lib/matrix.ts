import { Direction } from "./direction";

/**
 * An immutable m x n array of numbers
 */
export class Matrix {
  private matrix: number[][];
  private row: number;
  private col: number;

  /**
   * Creates a row * col matrix, and fills it with the given array of
   * numbers, starting with the first row, then the second, until the
   * array is exhausted. Does not modify the given array. If the array
   * has fewer elements than row * col, remaining elements are set to 0.
   * If more, than any element beyond row * col is ignored.
   *
   * @param {number} row : the number of rows
   * @param {number} col : the number of columns
   * @params {array} numbers : [optional] an array of numbers to fill the
   * matrix with
   */
  constructor(row: number, col: number, numbers: number[]) {
    const mtx: number[][] = new Array<number[]>();
    let i: number = 0;
    for (let r: number = 0; r < row; r++) {
      mtx.push([]);
      for (let c: number = 0; c < col; c++) {
        mtx[r][c] = (i < numbers.length) ? numbers[i++] : 0;
      }
    }
    this.matrix = mtx;
    this.row = row;
    this.col = col;
  }

  /**
   * Iterates over each element in the Matrix, and provides to the given
   * callback function the row number, column number, and value for the current
   * position in the matrix.
   *
   * @param {Function(row: number, col: number, value: number)} callback
   */
  public each(callback: (row: number, col: number, value: number) => void) {
    for (let r: number = 0; r < this.row; r++) {
      for (let c: number = 0; c < this.col; c++) {
        callback(r, c, this.matrix[r][c]);
      }
    }
  }

  public get(row: number, col: number): number {
    return this.matrix[row][col];
  }

  /**
   * Returns a vector of numbers from the Matrix.
   *
   * I have forgotten most of what little I learned about matrix algebra, but
   * I'm sure some of the supported directions aren't necessary for calculations.
   * However, they are helpful in treating the Matrix as a general grid of numbers.
   *
   * If the position at [row, col] is invalid for this matrix, return empty array. If the
   * size requested overflows the size of the matrix, it returns the array with whatever
   * available numbers there were (similar to the forgiving nature of JavaScript's array
   * library e.g. [1,2,3].slice(0,30000) --> [1,2,3])
   *
   * @param {number} row the row coordinate for the starting point
   * @param {number} col the column coordinate for the starting point
   * @param {number} size the size of the desired vector
   * @param {Direction} direction the direction of the vector from the starting point.
   * @returns {number[]} a vector of numbers in the given direction
   */
  public getVector(
    row: number,
    col: number,
    size: number,
    direction: Direction,
  ): number[] {
    const vector: number[] = [];

    for (let i: number = 0; i < size; i++) {
      if (0 > row || this.row <= row || this.col <= col) {
        return vector;
      }
      vector.push(this.matrix[row][col]);
      switch (direction) {
        case Direction.Right:
          col++;
          break;
        case Direction.Down:
          row++;
          break;
        case Direction.UpperRight:
          row--;
          col++;
          break;
        case Direction.LowerRight:
          row++;
          col++;
          break;
        // TODO: Left, Up, UpperLeft, LowerLeft
        default:
          throw new Error("[Matrix.getVector] Unsupported Direction");
      }
    }

    return vector;
  }
}
