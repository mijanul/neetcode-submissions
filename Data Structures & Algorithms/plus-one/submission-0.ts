class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let rem = 0;
        let n = digits.length - 1;

        for (let i = n; i >= 0; i--) {
            let total = 0;
            if (i === n) {
                total = digits[i] + 1;
            } else {
                total = digits[i] + rem;
            }
            digits[i] = total % 10;
            rem = Math.floor(total / 10);
        }

        if (rem !== 0) {
            digits.unshift(rem);
        }

        return digits;
    }
}
