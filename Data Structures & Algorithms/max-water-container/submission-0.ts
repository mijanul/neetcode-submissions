class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let result: number = 0;

        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            let lowHeight = Math.min(heights[left], heights[right]);
            let distance = right - left;

            let area = lowHeight * distance;

            if (area > result) {
                result = area;
            }

            if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }

        return result;
    }
}
