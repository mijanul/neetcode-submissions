class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums: number[]): number[] {
        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            if (nums[right] % 2 === 0) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
            }
        }

        return nums;
    }
}
