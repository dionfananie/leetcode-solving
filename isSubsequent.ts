/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s: string, t: string) {
  let find = 0;
  for (let idx = 0; idx < t.length; idx++) {
    const elm = t[idx];
    console.log("elm; ", elm);
    console.log("find: ", s[find]);
    console.log("==========================");

    if (s[find] === elm) find++;
  }

  return find === s.length;
};

// console.log(isSubsequence("ace", "abzcccccddde"));
