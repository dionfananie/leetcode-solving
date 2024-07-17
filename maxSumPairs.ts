/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums: number[], k: number) {
  const mapCount = new Map();
  let operations = 0;
  for (const num of nums) {
    const count = k - num;
    if (mapCount.get(count) > 0) {
      operations++;
      mapCount.set(count, 0);
    } else mapCount.set(num, count);
  }
  return operations;
};

console.log(maxOperations([3, 1, 2, 5, 4, 3], 6));
