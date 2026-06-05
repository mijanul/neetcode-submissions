class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        let n = nums.length;
        k %= n;

        const arr: number[] = new Array(n);

        for (let i = 0; i < n; i++) {
            arr[(i + k) % n] = nums[i];
        }

        for (let i = 0; i < n; i++) {
            nums[i] = arr[i];
        }
    }
}
