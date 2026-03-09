function main() {
  const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

  let index = 0;
  const n = input[index++];

  for (let i = 0; i < n; i++) {
    const x = input[index++];
    const y = input[index++];

    console.log(calculateOddSum(x, y));
  }
}

function calculateOddSum(x, y) {
  let sum = 0;
  let end = Math.max(x, y);
  let start = Math.min(x, y) + 1;

  if (start % 2 === 0) {
    start += 1;
  }

  for (let j = start; j < end; j += 2) {
    sum += j;
  }

  return sum;
}

main();
