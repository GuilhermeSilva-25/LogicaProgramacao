import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const [a, b] = lines.map(Number);
  const WEIGHT_A: number = 3.5;
  const WEIGHT_B: number = 7.5;
  const TOTAL_WEIGHT: number = WEIGHT_A + WEIGHT_B;
  const studentAverage: number = ((a * WEIGHT_A) + (b * WEIGHT_B)) / TOTAL_WEIGHT;
  console.log(`MEDIA = ${studentAverage.toFixed(5)}`);
}

main();
