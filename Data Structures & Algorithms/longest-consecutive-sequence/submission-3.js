class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxLength = 0;

        for (let i = 0; i < nums.length; i++) {
            let res = 1;

            let j = 1;

            while (nums.includes(nums[i] + j)) {
                res++;

                j++;
            }

            maxLength = Math.max(maxLength, res);
        }

        return maxLength;
    }
}
