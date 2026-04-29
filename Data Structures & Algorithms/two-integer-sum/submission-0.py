class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        value = []
        for (i, value) in enumerate(nums):
            next = i + 1 
            while next < len(nums):
                if value + nums[next] == target:
                    return [i, next]
                else:
                    next += 1