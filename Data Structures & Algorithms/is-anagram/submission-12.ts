class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length !== t.length) return false


        const count = {}

        for (let c of s) {
            count[c] = (count[c] | 0) + 1
        }

        for (let d of t) {
            if(!count[d]) return false

            count[d]--
        }

        return true


    }
}
