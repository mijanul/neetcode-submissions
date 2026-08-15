class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
   encode(strs: string[]): string {
    let output: string = "";
    for (let str of strs) {
      output += str.length + "#" + str;
    }
    return output;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    let output: string[] = [];

    let i = 0;

    while (i < str.length) {
      let j = i;

      while (str[j] !== "#") {
        j++;
      }

      let length = Number(str.slice(i, j));
      let word = str.slice(j + 1, j + 1 + length);

      output.push(word);

      i = j + 1 + length;
    }

    return output;
  }
}
