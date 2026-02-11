function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const value = parseInt(input);

  for (let i = 2; i <= value; i += 2) {
    console.log(`${i}^2 = ${i * i}`);
  }
}

main();
