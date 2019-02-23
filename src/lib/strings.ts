
// Determines if the given string is a palindrome. Single-character and empty
// strings will return true.
export function isPalindrome(str: string): boolean {
  for (
    let leftIndex: number = 0, rightIndex: number = str.length - 1;
    leftIndex < rightIndex;
    leftIndex++, rightIndex--
  ) {
    if (str[leftIndex] != str[rightIndex]) {
      return false;
    }
  }

  return true;
}
