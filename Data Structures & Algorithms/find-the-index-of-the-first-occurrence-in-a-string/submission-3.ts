class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack: string, needle: string): number {
        let m = haystack.length;
        let n = needle.length;

        if (n === 0) return 0;
        if (m === n && haystack === needle) return 0;

        for (let i = 0; i <= m - n; i++) {
            let j = 0;

            while (j < n && haystack[i + j] === needle[j]) {
                j++;
            }

            if (j === n) {
                return i;
            }
        }
        return -1;
    }
}
