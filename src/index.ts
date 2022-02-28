import { middleware } from "./modules";
import { rand, random } from "./libs";

export = {
  rand: (min: number, max: number) => {
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

    return middleware(arr, () => rand);
  },
  random: (num: number) => middleware([num], () => random),
};
