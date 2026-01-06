function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const [a, b] = input.trim().split(/\s+/).map(Number);
  const isMultiple = checkIsMultiple(a, b);
  if (isMultiple) {
    console.log(`Sao Multiplos`);
  } else {
    console.log(`Nao sao Multiplos`);
  }
}

function checkIsMultiple(a, b) {
  const largerNumber = Math.max(a, b);
  const smallerNumber = Math.min(a, b);

  return smallerNumber !== 0 && largerNumber % smallerNumber === 0;
}

main();
