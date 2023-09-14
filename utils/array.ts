export const getHalfwayIndex = (arr: any[]) => {
  if (arr.length % 2 === 0) {
    return Math.floor(arr.length / 2) - 1;
  }
  return Math.floor(arr.length / 2);
};

const arr = [1, 2, 3, 4, 5];
const index = getHalfwayIndex(arr);
const element = arr[index];

console.log(element);
