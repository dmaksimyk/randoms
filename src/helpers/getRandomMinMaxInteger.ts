const getRandomMinMaxInteger = (nums: number[]): number => {
  const [min, max] = nums;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomMinMaxInteger;
