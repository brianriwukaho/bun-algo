export const getHalfwayIndex = (enumerable: string | any[]) => {
  if (enumerable.length % 2 === 0) {
    return Math.floor(enumerable.length / 2) - 1;
  }
  return Math.floor(enumerable.length / 2);
};
