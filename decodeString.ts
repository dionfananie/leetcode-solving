/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s: string) {
  const stack: string[] = [];
  for (const char of s) {
    console.log("char: ", char);
    if (char !== "]") {
      stack.push(char);
      continue;
    }
    let cur = stack.pop();
    let str = "";
    while (cur !== "[") {
      str = cur + str;
      cur = stack.pop();
    }
    console.log("str: ", str);
    console.log("cur: ", cur);

    let num = "";
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    if (cur) stack.push(cur);
    stack.push(str.repeat(Number(num)));
    console.log("stack: ", stack);
  }
  return stack.join("");
};

// console.log(decodeString("3[a2[c]]"));
