class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {

        let ke = 0

        for (let [key, value] of Object.entries(nums)) {
            if (value !== val) {
                nums[ke] = value
                ke++
            }
        }

        return ke++

        
        
    }
}
