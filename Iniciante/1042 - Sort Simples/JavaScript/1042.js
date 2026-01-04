function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const originalNumbers = input.trim().split(/\s+/).map(Number);
  const orderedNumbers = sortNumbers(originalNumbers);
  printArray(orderedNumbers);
  console.log();
  printArray(originalNumbers);
}

function sortNumbers(originalNumbers) {
  const copy = [...originalNumbers];
  copy.sort((a, b) => a - b);
  return copy;
}

function printArray(array) {
  for (const number of array) {
    console.log(number);
  }
}

main();
