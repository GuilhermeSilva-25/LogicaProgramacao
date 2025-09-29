function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const [a, b] = lines.map(Number);
  const WEIGHT_A = 3.5;
  const WEIGHT_B = 7.5;
  const TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B;
  const studentAverage = ((a * WEIGHT_A) + (b * WEIGHT_B)) / TOTAL_WEIGHT;
  console.log(`MEDIA = ${studentAverage.toFixed(5)}`);
}

main();
