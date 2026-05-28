class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map()

        for (let i = 0; i < nums.length; i++) {
            let required = target - nums[i]

            if (seen.has(required)) {
                return [i, seen.get(required)]
            }

            seen.set(nums[i],i)
        }
    }
}
