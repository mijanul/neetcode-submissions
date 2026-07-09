class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack: string, needle: string): number {
        let left = 0;
        let right = needle.length;

        let res = -1;

        while (right <= haystack.length) {
            let str = haystack.slice(left, right);

            if (str === needle) {
                res = left;
                break;
            }

            left++;
            right++;
        }

        return res;
    }
}
