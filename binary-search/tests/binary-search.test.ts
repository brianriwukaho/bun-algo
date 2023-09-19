import { describe, test, expect } from 'bun:test';
import { search } from '../binary-search';

describe('binary search', () => {
    test('finds value', () => {
        const result = search([-1, 0, 3, 5, 9, 12], 9);
        expect(result).toEqual(4);
    });

    test('single element array and target found', () => {
        const result = search([5], 5);
        expect(result).toEqual(0);
    });

    test('single element array and target not found', () => {
        const result = search([5], 7);
        expect(result).toEqual(-1);
    });

    test('value does not exist in array', () => {
        const result = search([-1, 0, 3, 5, 9, 12], 2);
        expect(result).toEqual(-1);
    });
});
