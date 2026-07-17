class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        counter = 0
        candidate = None

        for n in nums:
            if counter == 0:
                candidate = n
            
            if n == candidate:
                counter += 1
            else:
                counter -= 1
        
        return candidate
            

            

        