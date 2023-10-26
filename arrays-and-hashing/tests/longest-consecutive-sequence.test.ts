import { describe, test, expect } from 'bun:test';
import { longestConsecutive } from '../longest-consecutive-sequence';

describe('longest consecutive sequence', () => {
    test('example 1', () => {
        const result = longestConsecutive([100, 4, 200, 1, 3, 2]);
        expect(result).toEqual(4);
    });

    test('example 2', () => {
        const result = longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
        expect(result).toEqual(9);
    });

    // You may assume that each input would have exactly one solution
});
