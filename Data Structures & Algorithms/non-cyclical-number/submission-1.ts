class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n: number): boolean {
        let slow: number = this.nextGen(n);
        let fast: number = this.nextGen(slow);

        while (fast !== 1 && slow !== fast) {
            slow = this.nextGen(slow);
            fast = this.nextGen(this.nextGen(fast));
        }

        return fast === 1;
    }

    nextGen(n: number): number {
        let sum: number = 0;

        while (n > 0) {
            let rem: number = n % 10;
            sum += rem ** 2;
            n = Math.floor(n / 10);
        }

        return sum;
    }
}
