/**
 * reverse vowel
 * @param {string} s
 * @return {string}
 * level easy
 */
var reverseVowels = function (s: string) {
  const vowel = ["a", "i", "u", "e", "o"];
  const vow = s.match(/[aeiou]/gi);
  console.log("vow: ", vow);

  const arr = s.split("");
  const vowelFind: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (vowel.indexOf(arr[i].toLowerCase()) >= 0) {
      vowelFind.push(arr[i]);
    }
    console.log("vowelFind: ", vowelFind);
  }
  let finalString = "";
  for (let x = 0; x < arr.length; x++) {
    if (vowel.indexOf(arr[x].toLowerCase()) >= 0) {
      finalString += vowelFind.pop();
    } else {
      finalString += arr[x];
    }
    console.log("final: ", finalString);
  }
  return finalString;
};

// console.log(reverseVowels("aA"));
