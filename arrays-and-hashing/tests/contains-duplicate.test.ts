import { describe, test, expect } from 'bun:test';
import { isValid } from '../../stack/valid-parentheses';
import { containsDuplicate } from '../contains-duplicate';

describe('contains-duplicate', () => {
    test('array with duplicates', () => {
        const input = [1, 2, 3, 1];
        const expected = true;
        const result = containsDuplicate(input);
        expect(result).toEqual(expected);
    });

    test('array with no duplicates', () => {
        const input = [1, 2, 3, 4];
        const expected = false;
        const result = containsDuplicate(input);
        expect(result).toEqual(expected);
    });

    test('empty array', () => {
        const expected = false;
        const result = containsDuplicate([]);
        expect(result).toEqual(expected);
    });
});
