import * as fs from "fs";

function main(): void {
  const input: number[] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

  let index: number = 0;
  const n: number = input[index++];

  for (let i = 0; i < n; i++) {
    const x: number = input[index++];
    const y: number = input[index++];

    console.log(calculateOddSum(x, y));
  }
}

function calculateOddSum(x: number, y: number): number {
  let sum: number = 0;
  let end: number = Math.max(x, y);
  let start: number = Math.min(x, y) + 1;

  if (start % 2 === 0) {
    start += 1;
  }

  for (let j = start; j < end; j += 2) {
    sum += j;
  }

  return sum;
}

main();
