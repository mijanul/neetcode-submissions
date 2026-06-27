class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums: number[], k: number): number {
        let res: number = Number.MAX_SAFE_INTEGER;

        nums.sort((a, b) => a - b)


        for (let i = 0; i<= nums.length -k; i++) {
            res = Math.min(res, nums[i+k-1] - nums[i])
        }

        return res;
    }
}
