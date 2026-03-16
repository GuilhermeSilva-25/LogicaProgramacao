function main() {
  const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

  let index = 0;
  const n = input[index++];

  for (let i = 0; i < n; i++) {
    const x = input[index++];
    const y = input[index++];

    if (y === 0) {
      console.log("divisao impossivel");
    } else {
      console.log((x / y).toFixed(1));
    }
  }
}

main();
