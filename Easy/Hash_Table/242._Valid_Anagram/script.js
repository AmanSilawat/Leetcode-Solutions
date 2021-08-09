// https://leetcode.com/problems/valid-anagram/
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
function areAnagrams(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    let hash_map = {}
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (char in hash_map) {
            hash_map[char]++;
        } else {
            hash_map[char] = 1;
        }
    }

    console.log(hash_map);

    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if (!hash_map[char]) {
            return false;
        } else {
            hash_map[char]--;
        }
    }
    return true;
}

console.log(areAnagrams('anagram', 'nagaram'))