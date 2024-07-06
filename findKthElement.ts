/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const findKthLargest = function (nums: number[], k: number) {
  let largest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) largest = nums[i];
  }

  // construct a hash map of difference between nums[i] and largest
  const hash: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = largest - nums[i];

    hash[diff] = (hash[diff] || 0) + 1;
  }
  let valueFind = -Infinity;
  let sumCount = 0;
  let prevCount = 0;
  console.log(hash);

  for (const [map, value] of Object.entries(hash)) {
    sumCount = sumCount + value;
    if (prevCount < k && k <= sumCount) {
      valueFind = Number(map);
      break;
    }
    prevCount = value + prevCount;
  }
  console.log(valueFind);

  const valueReturn = (valueFind - largest) * -1;
  console.log("valueReturn: ", valueReturn);

  return valueReturn;
};

// findKthLargest([3, 2, 1, 5, 6, 4, 99], 2);
// 1,2,2,3,3,4,5,5,6
