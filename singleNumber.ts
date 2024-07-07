/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums: number[]) {
  const arrSingle: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const idxFind = arrSingle.indexOf(nums[i]);
    console.log("nums: ", nums[i]);
    console.log("idxFind: ", idxFind);

    if (idxFind < 0) {
      arrSingle.push(nums[i]);
    } else {
      arrSingle.splice(idxFind, 1);
    }
    console.log(arrSingle);
  }
  return arrSingle[0];
};

console.log(singleNumber([4, 1, 2, 1, 2]));
