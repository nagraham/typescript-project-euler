/*
 * Functions that perform general mapping functions
*/

export function countItems(list: any[]): Map<any, number> {
  const map: Map<any, number> = new Map<any, number>();
  list.forEach((item) => {
    let count: number = 1;
    if (map.has(item)) {
      count += map.get(item) as number;
    }
    map.set(item, count);
  });
  return map;
}
