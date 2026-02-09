function main() {
  const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
  const x = Number(input[0]);
  const y = Number(input[1]);
  let sum = 0;
  let end = Math.max(x, y);
  let start = Math.min(x, y) + 1;

  if (start % 2 === 0) {
    start += 1;
  }

  for (let i = start; i < end; i += 2) {
    sum += i;
  }

  console.log(sum);
}

main();
