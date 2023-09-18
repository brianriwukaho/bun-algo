import { describe, test, expect } from 'bun:test';
import { twoSum } from '../two-sum';
import { groupAnagrams } from '../group-anagrams';

describe('group anagrams', () => {
    test('example 1', () => {
        const result = groupAnagrams([
            'eat',
            'tea',
            'tan',
            'ate',
            'nat',
            'bat',
        ]);
        expect(result).toEqual([
            ['eat', 'tea', 'ate'],
            ['tan', 'nat'],
            ['bat'],
        ]);
    });

    test('single character', () => {
        const result = groupAnagrams(['']);
        expect(result).toEqual([['']]);
    });

    test('single empty string  ', () => {
        const result = groupAnagrams(['a']);
        expect(result).toEqual([['a']]);
    });
});
