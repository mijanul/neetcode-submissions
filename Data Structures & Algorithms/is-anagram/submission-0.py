class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        for ch in s:
           t = t.replace(ch,'',1)
        
        return t == ''