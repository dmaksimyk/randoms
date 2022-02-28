const basicRandomizer = (nums: number[]): number => {
  const [min, max] = nums;
  const forOneNumber: number = Math.floor(Math.random() * min);
  const forTwoNumbers: number = Math.floor(Math.random() * (max - min + 1)) + min;

  return nums.length === 1 ? forOneNumber : forTwoNumbers;
};

export default basicRandomizer;
