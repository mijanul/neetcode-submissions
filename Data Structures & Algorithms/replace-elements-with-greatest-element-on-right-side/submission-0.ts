class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        const nums: number[] = [];

        for (let i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) {
                nums[i] = -1;
            } else {
                let j = i + 1;
                let max = arr[j];

                while (j < arr.length) {
                    max = Math.max(max, arr[j]);
                    j++;
                }

                nums[i] = max;
            }
        }

        return nums;
    }
}
