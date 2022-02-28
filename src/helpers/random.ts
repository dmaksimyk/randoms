import crypto from "crypto";

const advancedRandomizer = (nums: number[]): number => {
  const [max] = nums;
  return crypto.randomInt(max);
};

export default advancedRandomizer;
