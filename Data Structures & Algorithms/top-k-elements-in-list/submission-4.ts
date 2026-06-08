class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const store: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            store[nums[i]] = (store[nums[i]] || 0) + 1;
        }

        return Object.entries(store)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => Number(num));
    }
}
