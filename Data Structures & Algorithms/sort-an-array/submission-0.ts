class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        if (nums.length <= 1) return nums;

        const mid = Math.floor(nums.length / 2);

        const left = nums.slice(0, mid);
        const right = nums.slice(mid);

        return this.merge(this.sortArray(left), this.sortArray(right));
    }

    merge(left: number[], right: number[]): number[] {
        let i = 0;
        let j = 0;
        const res: number[] = [];

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                res.push(left[i]);
                i++;
            } else {
                res.push(right[j]);
                j++;
            }
        }

        while (i < left.length) {
            res.push(left[i]);
            i++;
        }

        while (j < right.length) {
            res.push(right[j]);
            j++;
        }

        return res;
    }
}
