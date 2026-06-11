class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>()

        for (let str of strs) {
            const newArr = new Array(26).fill(0)

            for (let ch of str) {
                let currentIndex = ch.charCodeAt(0) - 97
                newArr[currentIndex]++
            }

            let key = newArr.join(',')

            if (!map.get(key)) {
                map.set(key, [])
            }

             map.get(key)!.push(str)
        }

        return [...map.values()]


    }
}
