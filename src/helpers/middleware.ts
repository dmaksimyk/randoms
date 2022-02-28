const middleware = (nums: number[], func: Function): number => {
  try {
    if (nums.length > 2 || nums.length < 1) {
      throw new Error("enter one or two numbers.");
    }

    for (let num of nums) {
      if (num <= +0) {
        throw new Error(`enter a positive number, not: ${num}.`);
      }

      if (num > 281474976710655) {
        throw new Error(`it's too big, the maximum allowed number: 281474976710655.`);
      }
    }

    return func()(nums);
  } catch (e) {
    throw e;
  }
};

export default middleware;
