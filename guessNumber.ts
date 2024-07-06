function guess(n: number) {
  // const pick = Math.floor(Math.random() * 10);
  // console.log("pick: ", pick);
  if (n === 6) return 0;
  else if (n > 6) return -1;
  else if (n < 6) return 1;
  else return 0;
}

var guessNumber = function (n: number) {
  let start = 1;
  let end = n;
  //   while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  console.log("mid: ", mid);

  let guessNum = guess(mid);
  console.log("guess: ", guessNum);

  if (guessNum == 0) {
    console.log(mid);
    return mid;
  } else if (guessNum == 1) {
    start = mid + 1;
  } else if (guessNum == -1) {
    end = mid - 1;
  }
  //   }
};

console.log(guessNumber(4));
