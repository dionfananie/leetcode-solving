/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums: number[]) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Calculate left products and store in the output array
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }
  console.log(answer);

  // Calculate right products on the fly and multiply with left products in the output array
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
};

// console.log(productExceptSelf([1, 2, 3, 4]));
