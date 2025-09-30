import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const [a, b, c] = lines.map(Number);
  const WEIGHT_A: number = 2;
  const WEIGHT_B: number = 3;
  const WEIGHT_C: number = 5;
  const TOTAL_WEIGHT: number = WEIGHT_A + WEIGHT_B + WEIGHT_C;
  const studentAverage: number = ((a * WEIGHT_A) + (b * WEIGHT_B) + (c * WEIGHT_C)) / TOTAL_WEIGHT;
  console.log(`MEDIA = ${studentAverage.toFixed(1)}`);
}

main();
