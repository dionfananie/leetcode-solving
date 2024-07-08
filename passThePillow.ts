/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n: number, time: number) {
  let curr = 1;
  let up = true;
  let timeNow = time;
  while (timeNow > 0) {
    if (curr === n) {
      up = false;
      curr -= 1;
    } else if (curr === 1) {
      up = true;
      curr += 1;
    } else if (up) {
      curr += 1;
    } else curr -= 1;
    console.log("curr; ", curr);

    timeNow--;
  }
  return curr;
};

console.log(passThePillow(5, 12));
// 2, 3, 4, 5, 4;
// 3, 2, 1, 2, 3;
// 4, 5, 4, 3, 2;
// 1, 2, 3, 4, 5
