/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums: number[]) {
  let countZero: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      countZero.push(0);
      nums.splice(i, 1);
      i--;
    }
  }
  nums.push(...countZero);
  return nums;
};

// console.log(moveZeroes([0, 0, 1]));
