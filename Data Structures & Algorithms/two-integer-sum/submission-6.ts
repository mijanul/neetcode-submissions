class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map()
        const result = []


        for (let i = 0; i < nums.length; i++) {
            let req = target - nums[i]

            if (seen.has(req)) {
                result.push(i, seen.get(req))
            }

            seen.set(nums[i], i)
        }

        return result
    }
}
