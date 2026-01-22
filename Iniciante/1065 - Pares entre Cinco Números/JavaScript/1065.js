const NUMBER_OF_VALUES = 5;

function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.trim().split("\n");
  let numberOfEvenValues = 0;
  for (let i = 0; i < NUMBER_OF_VALUES; i++) {
    const value = parseInt(lines[i], 10);
    if (value % 2 === 0) {
      numberOfEvenValues++;
    }
  }
  console.log(`${numberOfEvenValues} valores pares`);
}

main();
