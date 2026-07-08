class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const store = {}

        for (let ch of s) {
            store[ch] = (store[ch] | 0) + 1
        }

        for (let ch of t) {
            if (!store[ch]) return false

            store[ch]--
        }

    return true
    }
}
