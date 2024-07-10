/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1: number[], nums2: number[]) {
  const arrNums = new Set(nums1);
  let min = Infinity;
  for (let i = 0; i < nums2.length; i++) {
    const el = nums2[i];
    if (arrNums.has(el) && el < min) min = el;
  }
  return min;
};

console.log(getCommon([1000000000, 1000000000], [1000000000]));
