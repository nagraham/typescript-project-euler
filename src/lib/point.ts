/**
 * A simple class every software engineer has made at some point in their career.
 * Represents a point in a coordinate plane or a grid. x is the column, y is the row.
 */
class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public getX() {
    return this.x;
  }

  public getY() {
    return this.y;
  }
}

export { Point }
