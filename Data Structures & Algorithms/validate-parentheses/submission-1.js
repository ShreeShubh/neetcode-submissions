class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []

        const pairs = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        for (let ch of s) {
            if (ch === "(" || ch === "{" || ch === "[") {
                stack.push(ch)
            } else {
                if (stack.length === 0) return false

                let top = stack.pop()

                if (top !== pairs[ch]) {
                    return false
                }
            }
        }

        return stack.length === 0
    }
}
