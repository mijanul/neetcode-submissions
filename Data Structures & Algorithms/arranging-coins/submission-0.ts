class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n: number): number {
        let start = 1;

        while (start <= n) {
            n -= start;
            start++;
        }

        if (start === n) return start;
        else return start - 1;
    }
}
