const sumOfUniqueElement = (nums: number[]) => {
  const mapElement = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mapElement.has(nums[i])) {
      const curr = mapElement.get(nums[i]);
      mapElement.set(nums[i], curr + 1);
    } else {
      mapElement.set(nums[i], 1);
    }
  }

  let sum = 0;
  mapElement.forEach((v, k) => {
    if (v === 1) sum += k;
  });
  return sum;
};

console.log(sumOfUniqueElement([1, 1, 2, 3, 4]));
