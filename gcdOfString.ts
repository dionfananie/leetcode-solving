/**
 * Greatest Common Divisor of Strings
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * @level easy
 */
var gcdOfStrings = function (str1: string, str2: string) {
  // handle the base case
  if (str1 + str2 !== str2 + str1) return "";
  let a = str1.length;
  let b = str2.length;

  // loop (divide) until you find the
  // highest common factor (length of string)
  // like we did in maths
  while (b) {
    let temp = b;
    b = a % b;
    console.log("b", b);

    a = temp;
  }
  return str1.substring(0, a);
};

// console.log(gcdOfStrings("ABABAB", "ABAB"));
