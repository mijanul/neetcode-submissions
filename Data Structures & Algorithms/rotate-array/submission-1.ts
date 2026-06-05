class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        const n = nums.length

        k %= n

        rotate(nums, 0, n - 1);
        rotate(nums, 0, k - 1);
        rotate(nums, k, n-1);


        function rotate (arr: number[], left: number, right: number) {
            while (left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]]
                left++
                right--
            }
        }
    }
}
