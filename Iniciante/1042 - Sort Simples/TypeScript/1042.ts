import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const originalNumbers: number[] = input.trim().split(/\s+/).map(Number);
  const orderedNumbers: number[] = sortNumbers(originalNumbers);
  printArray(orderedNumbers);
  console.log();
  printArray(originalNumbers);
}

function sortNumbers(originalNumbers: number[]): number[] {
  const copy: number[] = [...originalNumbers];
  copy.sort((a, b) => a - b);
  return copy;
}

function printArray(array: number[]): void {
  for (const number of array) {
    console.log(number);
  }
}

main();
