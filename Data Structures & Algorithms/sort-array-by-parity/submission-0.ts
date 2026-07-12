class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums: number[]): number[] {
        const arr: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] % 2 === 0) {
                arr.unshift(nums[i]);
            } else {
                arr.push(nums[i]);
            }
        }

        return arr;
    }
}
