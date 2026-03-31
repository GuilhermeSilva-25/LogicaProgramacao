import * as fs from "fs";

function main(): void {
  const input: number[] = fs
    .readFileSync(0, "utf-8")
    .trim()
    .split(/\s+/)
    .map(Number);

  let a: number = input[0];
  let n: number = input[1];
  let index: number = 2;

  while (n <= 0) {
    n = input[index];
    index++;
  }

  let sumTotal: number = 0;

  for (let i = 0; i < n; i++) {
    sumTotal += a + i;
  }

  console.log(sumTotal);
}

main();
