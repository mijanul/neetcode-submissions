class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails: string[]): number {
        function actualEmail(dirtyEmail: string) {
    const [local, domain] = dirtyEmail.split("@");

    return local.replace(/\./g, "").replace(/\+.*/, "") + "@" + domain;
  }

  const set: Set<string> = new Set();

  for (const email of emails) {
    set.add(actualEmail(email));
  }

  console.log(set);

  return [...set].length;
    }
}
