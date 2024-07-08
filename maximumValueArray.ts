/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs: string[]) {
  let maxStrs = 0;
  for (let i = 0; i < strs.length; i++) {
    const nums = Number(strs[i]);

    if (!Number.isNaN(nums)) {
      if (nums > maxStrs) maxStrs = nums;
    } else {
      if (strs[i].length > maxStrs) maxStrs = strs[i].length;
    }
    console.log("max: ", maxStrs);
  }
  return maxStrs;
};

console.log(maximumValue(["alice3", "bob", "00000000", "4"]));
