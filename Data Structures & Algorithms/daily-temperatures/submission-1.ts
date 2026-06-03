class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
         const result: number[] = new Array(temperatures.length).fill(0);

  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let popped = stack.pop()!;
      result[popped] = i - popped;
    }

    stack.push(i);
  }

  return result;
    }
}
