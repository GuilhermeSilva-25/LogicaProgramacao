function main() {
  const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
  let index = 0;
  const amount = parseInt(input[index++]);

  for (let i = 0; i < amount; i++) {
    const value = parseInt(input[index++]);

    if (value === 0) {
      console.log("NULL");
    } else {
      const parity = value % 2 !== 0 ? "ODD" : "EVEN";
      const sign = value > 0 ? "POSITIVE" : "NEGATIVE";
      console.log(`${parity} ${sign}`);
    }
  }
}

main();
