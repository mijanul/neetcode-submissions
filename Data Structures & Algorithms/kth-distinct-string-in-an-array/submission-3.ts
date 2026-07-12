class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr: string[], k: number): string {
        const map: Map<string, number> = new Map();

        for (let word of arr) {
            map.set(word, (map.get(word) || 0) + 1);
        }

        for (let word of arr) {
            if (map.get(word) === 1) {
                k--;
            }

            if (k === 0) {
                return word;
            }
        }

        return "";
    }
}
