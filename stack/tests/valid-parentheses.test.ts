import { describe, test, expect } from "bun:test";
import { isValid } from "../valid-parentheses";

describe("valid-parentheses", () => {
  test("example 1", () => {
    const input = "()";
    const isValidPalindrome = isValid(input);
    expect(isValidPalindrome).toEqual(true);
  });

  test("example 2", () => {
    const input = "()[]{}";
    const isValidPalindrome = isValid(input);
    expect(isValidPalindrome).toEqual(true);
  });

  test("example 3", () => {
    const input = "(]";
    const isValidPalindrome = isValid(input);
    expect(isValidPalindrome).toEqual(false);
  });

  test("empty string", () => {
    const input = "";
    const isValidPalindrome = isValid(input);
    expect(isValidPalindrome).toEqual(true);
  });

  test("single bracket", () => {
    const input = "[";
    const isValidPalindrome = isValid(input);
    expect(isValidPalindrome).toEqual(false);
  });

  test("double opening bracket", () => {
    const input = "[[";
    const isValidPalindrome = isValid(input);
    expect(isValidPalindrome).toEqual(false);
  });

  test("double closing bracket", () => {
    const input = "]]";
    const isValidPalindrome = isValid(input);
    expect(isValidPalindrome).toEqual(false);
  });
});
