import { printBenchmark } from "../lib/benchmark";
import { Matrix } from "../lib/matrix";
import { Point } from "../lib/point";

/**
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
 * there are exactly 6 routes to the bottom right corner. How many such routes are there through
 * a 20×20 grid?
 *
 * Runs in ~2ms (laptop plugged in); ~5ms (unplugged)
 */
function latticePaths(num: number): number {
  const len: number = num + 1;
  const matrix: Matrix = new Matrix(len, len, []);

  function rightPoint(p: Point): Point {
    return new Point(p.getX() + 1, p.getY());
  }

  function downPoint(p: Point): Point {
    return new Point(p.getX(), p.getY() + 1);
  }

  function isEdgePoint(p: Point): boolean {
    if (p.getY() >= len || p.getX() >= len) {
      throw new Error(`Crossed grid boundary unexpectedly at point x=${p.getX()} y=${p.getY()}`);
    }
    return p.getY() === len - 1 || p.getX() === len - 1;
  }

  function hasPathCount(p: Point): boolean {
    return getPathCount(p) > 0;
  }

  function getPathCount(p: Point): number {
    return matrix.get(p.getY(), p.getX());
  }

  function setPathCount(p: Point, n: number) {
    matrix.set(p.getY(), p.getX(), n);
  }

  /*
   * Caching the "path counts" in the matrix speeds makes this O(n) (where n is the numer of points
   * in the grid). A naive recursive solution is O(n^2) b/c it breaks it down into "sub-grids,"
   * so points are repeatedly evaluated.
   */
  function calculatePathCounts(p: Point) {
    if (isEdgePoint(p)) {
      setPathCount(p, 1);
    } else {
      const down: Point = downPoint(p);
      const right: Point = rightPoint(p);
      if (hasPathCount(down) && hasPathCount(right)) {
        setPathCount(p, getPathCount(down) + getPathCount(right));
      } else {
        if (!hasPathCount(right)) { calculatePathCounts(right); }
        if (!hasPathCount(down)) { calculatePathCounts(down); }
        calculatePathCounts(p);
      }
    }
  }

  calculatePathCounts(new Point(0, 0));

  return matrix.get(0, 0);
}

printBenchmark(() => latticePaths(20));
