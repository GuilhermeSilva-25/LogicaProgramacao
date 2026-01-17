function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8").split('\n');;

  let positiveValues = 0;

  for (let i = 0; i < 6; i++) {
    const value = Number(input[i]);
    if (value > 0) {
      positiveValues++;
    }
  }

  console.log(`${positiveValues} valores positivos`);
}

main();
