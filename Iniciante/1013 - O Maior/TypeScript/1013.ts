import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split(" ");
  const [a, b, c] = lines.map(Number);
  const higherValue: number = findHigherValue(a, b, c);
  console.log(`${higherValue} eh o maior`);
}

function findHigherValue(a: number, b: number, c: number): number {
  return Math.max(a, b, c);
}

main();