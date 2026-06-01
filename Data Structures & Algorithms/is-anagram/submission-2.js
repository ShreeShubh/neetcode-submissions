class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false

        let obj = {}

        for (const char of s) {
            obj[char] = (obj[char] || 0) + 1
        }

        for (const char of t) {
            if (!obj[char]) {
                return false
            }

            obj[char]--
        }

        return true
    }
}
