class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ''
        if len(strs) == 1:
            return strs[0]

        prefix = strs[0]

        for s in strs: 
            while not s.startswith(prefix):
                prefix = prefix[:-1]

                if not prefix:
                    return ""
        
        return prefix