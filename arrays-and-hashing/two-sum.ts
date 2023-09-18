export const twoSum = (nums: number[], target: number): number[] => {
    const occurenceMap: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const correspondingNumber = target - currentNum;

        const matchIndex = occurenceMap[correspondingNumber];

        if (Number.isInteger(matchIndex)) {
            return [matchIndex, i];
        }

        occurenceMap[currentNum] = i;
    }

    throw new Error('Should have a match');
};
