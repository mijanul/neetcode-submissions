class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;

        let result = 0;

        while (left < right) {
            let lowHeight = Math.min(heights[left], heights[right]);

            let distance = right - left;

            let area = lowHeight * distance;

            console.log(area);

            result = Math.max(area, result);

            if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }

        return result;
    }
}
