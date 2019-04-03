 /**
  * Writes a number as a string e.g. 342 => "three hundred and forty-two." This
  * function can support writing numbers from 0 <= n <= 999,999,999,999,999
  *
  * @param {number} num the number to convert to English
  */
function convertNumberToEnglish(num: number): string {
  if (num === 0) {
    return "zero";
  }

  let englishNumber = "";
  const groupedDigits = _groupByThreeDigits(num.toString());

  for (let i = 0; i < groupedDigits.length; i++) {
    let currStr = _convertHundreds(groupedDigits[i]);
    const currNum = Number(groupedDigits[i]);

    /*
     * logic to determine whether we need to insert "," or an "and"
     * e.g. 1001 ==> one thousand and one
     * e.g. 1111 ==> one thousand, one hundred and eleven
     */
    if (englishNumber.length > 0) {
      if (currNum >= 100) {
        currStr = ", " + currStr;
      } else if (i === groupedDigits.length - 1 && currNum > 0) {
        currStr = " and " + currStr;
      }
    }

    // add the scale notation e.g. "thousand"
    if (groupedDigits.length - i > 1 && currNum > 0) {
      currStr += " " + scaleNotations[(groupedDigits.length - i) - 2];
    }
    englishNumber += currStr;
  }

  return englishNumber;
}

const commonNumberMap = new Map([
  ["1", "one"],
  ["2", "two"],
  ["3", "three"],
  ["4", "four"],
  ["5", "five"],
  ["6", "six"],
  ["7", "seven"],
  ["8", "eight"],
  ["9", "nine"],
  ["10", "ten"],
  ["11", "eleven"],
  ["12", "twelve"],
  ["13", "thirteen"],
  ["14", "fourteen"],
  ["15", "fifteen"],
  ["16", "sixteen"],
  ["17", "seventeen"],
  ["18", "eighteen"],
  ["19", "nineteen"],
]);

const tensMap = new Map([
  ["2", "twenty"],
  ["3", "thirty"],
  ["4", "forty"],
  ["5", "fifty"],
  ["6", "sixty"],
  ["7", "seventy"],
  ["8", "eighty"],
  ["9", "ninety"],
]);

const scaleNotations = [
  "thousand",
  "million",
  "billion",
  "trillion",
];

/**
 * Handles logic for converting any value from 1 <= n <= 999 to English
 */
function _convertHundreds(numberStr: string): string {
  // helpful for catching errors while tinkering with this entire Fn's logic
  if (numberStr.length > 3 || numberStr.length < 1) {
    throw new Error(`_convertHundreds: numberStr=${numberStr} length must be: 1 <= length <= 3`);
  }

  const num = Number(numberStr);
  numberStr = num.toString(); // this takes 023 -> 23

  let englishNum = "";
  if (num >= 100) {
    englishNum = commonNumberMap.get(numberStr[0]) + " hundred";
  }

  const tensNumStr = _convertTens((num % 100).toString());
  if (tensNumStr.length > 0) {
    if (englishNum.length > 0) {
      englishNum += " and ";
    }
    englishNum += tensNumStr;
  }

  return englishNum;
}

/**
 * Handles logic for converting any value from 1 <= n <= 1000 to English.
 * Returns a blank string if the value is zero.
 */
function _convertTens(numberStr: string): string {
  const num = Number(numberStr);
  if (num === 0) {
    return "";
  }
  if (num >= 0 && num < 20) {
    return commonNumberMap.get(numberStr) as string;
  }

  let englishNumber = tensMap.get(numberStr[0]) as string;
  const onesDigit = numberStr[1];
  if (onesDigit !== "0") {
    englishNumber += "-" + commonNumberMap.get(onesDigit);
  }
  return englishNumber;
}

/**
 * Given a number string, it splits it into into groups of 3,
 * (right where the commas would be in a number e.g. 100,000,000).
 * If the first number has fewer than 3 digits, this adds padding.
 *
 * e.g. 1234567 => [001, 234, 567]
 */
function _groupByThreeDigits(numberStr: string): string[] {
  let paddedNumStr = numberStr.slice(0);
  while (paddedNumStr.length % 3 !== 0) {
    paddedNumStr = "0" + paddedNumStr;
  }

  const groupArr = [];
  let i = 0;
  while (i < paddedNumStr.length) {
    groupArr.push(paddedNumStr.slice(i, i + 3));
    i += 3;
  }

  return groupArr;
}

export { convertNumberToEnglish };
