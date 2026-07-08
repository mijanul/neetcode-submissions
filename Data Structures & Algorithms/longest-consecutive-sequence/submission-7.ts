class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set: Set<number> = new Set(nums);
        let longest: number = 0;

        for (let i = 0; i < nums.length; i++) {
            if (!set.has(nums[i] - 1)) {
                let current = nums[i];
                let length = 1;

                while (set.has(current + 1)) {
                    current++;
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}
