class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr: string[], k: number): string {
        let set: Set<string> = new Set();

        let duplicate: Set<string> = new Set();

        for (let i = 0; i < arr.length; i++) {
            let value = arr[i];

            if (set.has(value)) {
                set.delete(value);
                duplicate.add(value);
            }
            if (!duplicate.has(value)) {
                set.add(value);
            }
        }

        console.log([...set]);

        return [...set][k - 1] ?? "";
    }
}
