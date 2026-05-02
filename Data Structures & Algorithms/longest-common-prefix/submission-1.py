class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:

        if len(strs) == 0:
            return ""
        
        if len(strs) == 1:
            return strs[0]
        
        current_longest = ''

        for i, ch in enumerate(strs):
            n = i + 1

            if n < len(strs):

                for j in range (len(ch), 0, - 1):
                    if current_longest == "" and i != 0 :
                        break
                    t = j
                    v1, v2 = ch[:t], strs[n][:t]
                    if v1 == v2 :
                        if bool(current_longest) == False:
                            current_longest = v1
                        else:
                            current_longest = min(current_longest, v1, key = len)
                        break

                    elif v1 != v2 and i == 0:
                        current_longest = ""
                
                if (current_longest == ""):
                    break
        return current_longest