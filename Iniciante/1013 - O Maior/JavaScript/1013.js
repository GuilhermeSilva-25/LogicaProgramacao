function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split(" ");
  const [a, b, c] = lines.map(Number);
  const higherValue = findHigherValue(a, b, c);
  console.log(`${higherValue} eh o maior`);
}

function findHigherValue(a, b, c) {
  return Math.max(a, b, c);
}

main();
