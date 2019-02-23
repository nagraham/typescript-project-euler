import "jasmine";
import * as Mapper from "../src/mapper";

describe("countItems", () => {
  describe("with array of duplicated numbers", () => {
    it("returns a map of counts for those things", () => {
      let expectedMap: Map<number, number> = new Map<number, number>();
      expectedMap.set(1, 1);
      expectedMap.set(2, 2);
      expectedMap.set(3, 3);
      expect(Mapper.countItems([1, 2, 2, 3, 3, 3])).toEqual(expectedMap);
    });
  });
  describe("with array of duplicated strings", () => {
    it("returns a map of counts for those things", () => {
      let expectedMap: Map<string, number> = new Map<string, number>();
      expectedMap.set("a", 1);
      expectedMap.set("b", 2);
      expectedMap.set("c", 3);
      expect(Mapper.countItems(["b", "c", "a", "c", "b", "c"])).toEqual(expectedMap);
    });
  });
  describe("with array of unique things", () => {
    it("returns a map of counts for those things", () => {
      let expectedMap: Map<number, number> = new Map<number, number>();
      expectedMap.set(1, 1);
      expectedMap.set(2, 1);
      expectedMap.set(3, 1);
      expectedMap.set(4, 1);
      expectedMap.set(5, 1);
      expect(Mapper.countItems([1, 2, 3, 4 ,5])).toEqual(expectedMap);
    });
  });
});
