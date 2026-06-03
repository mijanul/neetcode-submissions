class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let resultArr = [];

        operations.forEach((val) => {
            if (Number(val)) {
                resultArr.push(Number(val));
            } else if (val === "+") {
                resultArr.push(
                    (resultArr[resultArr.length - 1] ?? 0) + (resultArr[resultArr.length - 2] ?? 0),
                );
            } else if (val === "D") {
                resultArr.push(2 * (resultArr[resultArr.length - 1] ?? 0));
            } else if (val === "C") {
                resultArr.pop();
            }
        });

        return resultArr.reduce((acc, curr) => acc + curr, 0);
    }
}
