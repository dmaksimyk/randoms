import { basicRandomizer, middleware } from "../helpers";

const rand = (min: number, max: number) => {
  const arr: number[] = [min];
  const secondMax = max || min;

  if (max && max > min) {
    arr.push(secondMax);
  } else {
    if (max && max <= min) {
      arr.push(min + 1);
    } else if (!max && secondMax <= min) {
      arr.push(min + 1);
    }
  }

  return middleware(arr, () => basicRandomizer);
};

export default rand;
