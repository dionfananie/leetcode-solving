/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s: string) {
  const newArr: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") newArr.pop();
    else newArr.push(s[i]);
  }

  return newArr.join("");
};

// console.log(removeStars("leet*cod*"))
