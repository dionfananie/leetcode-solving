/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr: number[]) {
  const mappingScore: number[] = [];
  for (let idx = 0; idx < arr.length; idx++) {
    const element = arr[idx];
    if (!mappingScore[element]) {
      mappingScore[element] = 1;
    } else mappingScore[element] = mappingScore[element] + 1;
  }
  console.log(mappingScore);

  const check = [...new Set(mappingScore)];
  console.log(check);

  return check.length === mappingScore.length;
};
// not solved
// console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
