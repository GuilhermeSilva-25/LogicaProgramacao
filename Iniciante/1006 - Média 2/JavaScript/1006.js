function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const [a, b, c] = lines.map(Number);
  const WEIGHT_A = 2;
  const WEIGHT_B = 3;
  const WEIGHT_C = 5;
  const TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B + WEIGHT_C;
  const studentAverage = ((a * WEIGHT_A) + (b * WEIGHT_B) + (c * WEIGHT_C)) / TOTAL_WEIGHT;
  console.log(`MEDIA = ${studentAverage.toFixed(1)}`);
}

main();
