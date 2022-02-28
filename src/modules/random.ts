import { advancedRandomizer, middleware } from "../helpers";

const random = (nums: number): number => {
  return middleware([nums], () => advancedRandomizer);
};

export default random;
