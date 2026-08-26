class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let score = 0;

        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] === " ") {
                if (score === 0) continue;
                else break;
            }
            score++;
        }

        return score;
    }
}
