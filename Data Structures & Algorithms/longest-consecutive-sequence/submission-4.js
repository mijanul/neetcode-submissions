class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            // process only if sequence starts here
            if (!set.has(nums[i] - 1)) {
                let current = nums[i];
                let length = 1;

                while (set.has(current + 1)) {
                    current += 1;
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
