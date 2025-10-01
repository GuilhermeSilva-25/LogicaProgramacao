function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const [a, b, c, d] = lines.map(Number);
  const difference = a * b - c * d;
  console.log(`DIFERENCA = ${difference}`);
}

main();
