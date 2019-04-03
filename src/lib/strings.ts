/*
 * String-based functions
*/

/**
 * Returns the count of values in a string matching the regular expression.
 *
 * The regular expression is optional, and will match on any character (although
 * it would be silly to use this function without a RegExp parameter b/c it would
 * be a worse performing version of String.length).
 *
 * @param {string} str the string to get a count for
 * @param {RegExp} regex the regular expression used for matching (default: any character)
 */
export function count(str: string, regex = new RegExp(".")): number {
  let cnt = 0;
  for (const c of str) {
    cnt += regex.test(c) ? 1 : 0;
  }
  return cnt;
}

/**
 * Determines if the given string is a palindrome. Single-character and empty
 * strings will return true.
 */
export function isPalindrome(str: string): boolean {
  for (
    let leftIndex: number = 0, rightIndex: number = str.length - 1;
    leftIndex < rightIndex;
    leftIndex++, rightIndex--
  ) {
    if (str[leftIndex] !== str[rightIndex]) {
      return false;
    }
  }
  return true;
}

/*
 * Converts a delimited string to an array of numbers
 */
export function toNumbers(str: string, delimiter: string = ""): number[] {
  return str.split(delimiter).map((s) => Number(s));
}
