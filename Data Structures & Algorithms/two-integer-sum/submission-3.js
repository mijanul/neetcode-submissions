class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const curr = target - nums[i];
    if (curr in seen) {
      return [seen[curr], i];
    } else {
      seen[nums[i]] = i;
    }
  }
    }
}
