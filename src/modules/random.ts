import { advancedRandomizer, middleware } from "../helpers";

const random = (num: number): number => {
  return middleware([num], () => advancedRandomizer);
};

export default random;
