class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>()

        for (let str of strs) {
            let count = new Array(26).fill(0);

            for (let ch of str) {
                count[ch.charCodeAt(0) -97]++
            }

            const key = count.join(",");

            if (!map.has(key)) {
                map.set(key, [])
            }

            map.get(key)!.push(str)


        }

        return [...map.values()]
    }
}
