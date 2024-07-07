function guess(n: number) {
  const pick = 13;
  if (n > pick) return -1;
  else if (n < pick) return 1;
  else return 0;
}

var guessNumber = function (n: number) {
  let start = 1;
  let resultGuess = -Infinity;
  let initNumber = n;

  while (resultGuess !== 0) {
    let mid = Math.floor((start + initNumber) / 2);

    resultGuess = guess(mid);

    if (resultGuess === 1) {
      // guess lower than real number picked
      start = mid + 1;
    } else if (resultGuess === -1) {
      // guess higher than real number picked
      initNumber = mid - 1;
    } else return mid;
  }
};

console.log(guessNumber(17));
