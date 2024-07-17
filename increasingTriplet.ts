/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums: number[]) {
  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) first = nums[i];
    else if (nums[i] > first && nums[i] <= second) second = nums[i];
    else if (nums[i] > first && nums[i] > second) return true;
  }
  return false;
};

console.log(increasingTriplet([5, 4, 3, 2, 6, 4, 3, 8, 2, 1]));
