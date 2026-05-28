class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleaned = re.sub(r'[^a-z0-9]', '', s.lower())
        start = 0
        end = len(cleaned) - 1

        while (end > start):
            if (cleaned[start] != cleaned[end]):
                return False
                
            start += 1
            end -= 1
        
        return True
        