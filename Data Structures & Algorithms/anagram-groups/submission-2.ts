class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length === 1) return [strs];
        const store = new Map<string, string[]>();

        for (let str of strs) {
            let sorted = str.split("").sort().join("");

            if (!store.has(sorted)) {
                store.set(sorted, []);
            }

            store.get(sorted)!.push(str);
        }

        return [...store.values()];
    }
}
