/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * @level easy
 */
var canPlaceFlowers = function (flowerbed: number[], n: number) {
  if (n < 1) return true;

  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    const prev = flowerbed[i - 1] || 0;
    const curr = flowerbed[i];
    const next = flowerbed[i + 1] || 0;
    console.log("prev: ", prev);
    console.log("curr: ", curr);
    console.log("next: ", next);
    console.log("===========================================");
    console.log(flowerbed);

    if (prev === 0 && curr === 0 && next === 0) {
      flowerbed[i] = 1;
      count++;
    }
  }

  return count >= n;
};
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
