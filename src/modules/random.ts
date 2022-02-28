import { getRandomMinMaxInteger, getRandomNumInteger, middleware } from "../helpers";

const random = (first: number, second?: number) => {
  // if only one number
  if (first && !second) return middleware([first], () => getRandomNumInteger);

  // if two is a number
  const arr: number[] = [first];
  const secondMax = second || first;

  if (second && second > first) {
    arr.push(secondMax);
  } else {
    if (second && second <= first) {
      arr.push(first + 1);
    } else if (!second && secondMax <= first) {
      arr.push(first + 1);
    }
  }

  return middleware(arr, () => getRandomMinMaxInteger);
};

export default random;
