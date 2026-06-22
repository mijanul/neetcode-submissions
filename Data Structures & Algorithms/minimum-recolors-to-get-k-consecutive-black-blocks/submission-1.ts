class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks: string, k: number): number {
        let res: number = Infinity;

        for (let i = 0; i < blocks.length; i++) {
            if (!blocks[i + k - 1]) break;
            let count = 0;
            let right = 0;

            while (right < k) {
                if (blocks[i + right] === "W") {
                    count++;
                }
                right++;
            }

            res = Math.min(res, count);
        }

        return res;
    }
}
