export const containsDuplicate = (nums: number[]): boolean => {
    const numSet = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        if (numSet.has(currentNumber)) {
            return true;
        }
        numSet.add(currentNumber);
    }

    return false;
};

const input: number[] = [1, 1];
console.log(`${input} contains duplicates: ${containsDuplicate(input)}`);
