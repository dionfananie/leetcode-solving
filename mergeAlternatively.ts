/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// merge string alternately

var mergeAlternately = function (word1: string, word2: string) {
  const [wordLoop, wordShort] =
    word1.length > word2.length ? [word1, word2] : [word2, word1];
  let word = "";
  for (let i = 0; i < wordLoop.length; i++) {
    if (wordShort[i]) {
      word = word + word1[i] + word2[i];
    } else word = word + wordLoop[i];
  }
  return word;
};

// console.log(mergeAlternately("abc", "pqr"));
