/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers: number[][]) {
  let waitingCount = 0;
  let finish = 0;
  for (let i = 0; i < customers.length; i++) {
    const curr = customers[i];
    if (i === 0) {
      finish = curr[0] + curr[1];
    } else if (i > 0 && curr[0] > finish) {
      finish = curr[0] + curr[1];
    } else {
      finish += curr[1];
    }

    waitingCount = waitingCount + finish - curr[0];

    console.log(customers[i]);
    console.log("finish: ", finish);
    console.log("waitingCount: ", waitingCount);
  }
  return waitingCount / customers.length;
};

console.log(
  averageWaitingTime([
    [5, 2],
    [5, 4],
    [10, 3],
    [20, 1],
  ])
);
