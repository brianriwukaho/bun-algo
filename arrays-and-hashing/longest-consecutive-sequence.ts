export function longestConsecutive(nums: number[]): number {
    const set = new Set<number>(nums);
    let largestConsecutive = 0;

    for (const num of set) {
        // while has next, increment
        // while has previous, increment
        // largestConsecutive = Math.max(largestConsecutive, currentConsecutive)
    }

    return largestConsecutive;
}
