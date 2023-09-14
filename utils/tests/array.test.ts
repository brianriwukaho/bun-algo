import { describe, test, expect } from "bun:test";
import { getHalfwayIndex } from "../array";

describe("array utils", () => {
  describe("getHalfwayIndex", () => {
    test("returns the index of the middle element for an odd array", () => {
      const arr = [1, 2, 3, 4, 5];

      const expected = 2;

      const actual = getHalfwayIndex(arr);

      expect(actual).toEqual(expected);
    });

    test("returns the index of the middle element for an even array", () => {
      const arr = [1, 2, 3, 4];

      const expected = 1;

      const actual = getHalfwayIndex(arr);

      expect(actual).toEqual(expected);
    });
  });
});
