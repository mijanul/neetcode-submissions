class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.lenght === 1) return [strs]
        let result = {}
        for (let i = 0; i < strs.length; i++) {
            let val = strs[i]
            let sortedVal = val.split("").sort().join("")
           if( result[sortedVal] ) {
                result[sortedVal].push(val)
           } else {
            result[sortedVal] = [val]
           }
        }

        return Object.values(result)
    }
}
