import { describe, test, expect } from 'bun:test';
import { twoSum } from '../two-sum';

describe('two sum', () => {
    test('numbers add up to target', () => {
        const result = twoSum([2, 7, 11, 15], 9);
        expect(result).toEqual([0, 1]);
    });

    test('numbers add up to target 2', () => {
        const result = twoSum([3, 2, 4], 6);
        expect(result).toEqual([1, 2]);
    });

    // You may assume that each input would have exactly one solution
    test.skip('empty array provided', () => {});
});
