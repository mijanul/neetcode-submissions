class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        const nums: number[] = [];
        let current = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            nums[i] = current;
            current = Math.max(current, arr[i]);
        }

        return nums;
    }
}
