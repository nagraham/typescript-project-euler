
export function countItems(list: Array<any>): Map<any, number> {
  let map: Map<any, number> = new Map<any, number>();
  list.forEach(item => {
    if (map.has(item)) {
      map.set(item, <number> map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });
  return map;
}
