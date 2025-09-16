function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const [a, b] = lines.map(Number);
  const result = a + b;
  console.log(`SOMA = ${result}`);
}

main();
