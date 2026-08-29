class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let score = 0;

        let i = 0;

        while (i < s.length - 1) {
            score += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
            i++;
        }

        return score;
    }
}
