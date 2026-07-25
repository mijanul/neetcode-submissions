class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n: number): number {
        return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
    }
}
