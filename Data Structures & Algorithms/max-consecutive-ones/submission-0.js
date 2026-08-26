class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let current = 0;

        for (let i = 0; i <= nums.length; i++) {
            if (nums[i] === 1) {
                current++;
            } else {
                count = Math.max(count, current);
                current = 0;
            }
        }

        return count;
    }
}
