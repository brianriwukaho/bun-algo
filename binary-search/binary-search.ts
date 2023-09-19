export const search = (
    nums: number[],
    target: number,
    leftIndex: number = 0,
    rightIndex: number = nums.length
): number => {
    const halfwayPoint = Math.floor((leftIndex + rightIndex) / 2);
    const currentNumber = nums[halfwayPoint];

    if (currentNumber === target) {
        return halfwayPoint;
    }

    if (rightIndex - leftIndex === 1) {
        return -1;
    }

    if (currentNumber < target) {
        leftIndex = halfwayPoint;
    } else {
        rightIndex = halfwayPoint;
    }

    return search(nums, target, leftIndex, rightIndex);
};

// search(
//     [
//         1, 3, 7, 10, 14, 15, 16, 18, 20, 21, 22, 23, 25, 33, 35, 42, 45, 47, 50,
//         52,
//     ],
//     33
// );
