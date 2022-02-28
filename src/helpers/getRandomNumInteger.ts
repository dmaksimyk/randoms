import crypto from "crypto";

const getRandomNumInteger = (nums: number[]): number => {
  const [max] = nums;
  return crypto.randomInt(max);
};

export default getRandomNumInteger;
