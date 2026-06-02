class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        
        for (let i = 0; i < prices.length; i++) {
            let k = prices[i]
            let max;
            
            if ((i+1) < prices.length) {
                max = prices.slice(i+1).reduce((a, b) => a > b ? a : b)
            }
            
            if (profit < (max - k)) {
                profit = max - k
            }
        }

        return profit
    }
}
