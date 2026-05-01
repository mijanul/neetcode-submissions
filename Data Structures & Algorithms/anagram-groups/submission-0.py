class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        if len(strs) == 1:
            return [strs]
        
        anagram_list = defaultdict(list)


        for word in strs:
            key = ''.join(sorted(word))
            anagram_list[key].append(word)

        return_value = list(anagram_list.values())

        return return_value
               
