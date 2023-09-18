import { describe, test, expect } from 'bun:test';
import { containsDuplicate } from '../contains-duplicate';
import { isAnagram } from '../valid-anagram';

describe('valid anagram', () => {
    test('valid anagram', () => {
        const expected = true;
        const result = isAnagram('halsey', 'ashley');
        expect(result).toEqual(expected);
    });

    test('invalid anagram', () => {
        const expected = false;
        const result = isAnagram('rat', 'car');
        expect(result).toEqual(expected);
    });

    test('empty strings', () => {
        const expected = true;
        const result = isAnagram('', '');
        expect(result).toEqual(expected);
    });
});
