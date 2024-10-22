/**
 * @param {number[]} arr
 * @return {boolean}
 */

// can improve using new Map and new Set
var uniqueOccurrences = function (arr: number[]) {
  const mappingScore: Record<number, number> = {};
  for (let idx = 0; idx < arr.length; idx++) {
    const element = arr[idx];
    console.log("element:", element);

    if (!mappingScore[element]) {
      mappingScore[element] = 1;
    } else mappingScore[element] = mappingScore[element] + 1;
    console.log(mappingScore);
  }
  const values = Object.values(mappingScore);
  return values.length === [...new Set(values)].length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));

var isEmpty = function (obj: Record<any, any>) {
  const keys = Object.keys(obj);
  return !Boolean(keys.length);
};
console.log(isEmpty({ a: 1 }));
