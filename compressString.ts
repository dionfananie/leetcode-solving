/**
 * compress string array
 * @param {character[]} chars
 * @return {number}
 * @level medium
 */
var compress = function (chars: string[]) {
  if (chars.length === 1) return 1;

  let countChar = 0;
  for (let i = chars.length - 1; i >= 0; i--) {
    const nextIdx = i + 1;
    const next = chars[nextIdx];
    const curr = chars[i];
    const prev = chars[i - 1] || "";

    if (next === curr) {
      countChar++;
      chars.splice(nextIdx, 1);
      if (prev !== curr) {
        countChar++;
        const displayCountChar = String(countChar);

        chars.splice(nextIdx, 0, ...displayCountChar);
        countChar = 0;
      }
    }
  }
  return chars.length;
};

const arrC = new Array(12).fill("c");
const arr = ["a", "a", "b", "b", ...arrC];
// console.log("result compress: ", compress(arr));
// console.log("newArr: ", arr);
