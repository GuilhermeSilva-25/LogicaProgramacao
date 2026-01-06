import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const [a, b] = input.trim().split(/\s+/).map(Number);
  const isMultiple: boolean = checkIsMultiple(a, b);
  if (isMultiple) {
    console.log(`Sao Multiplos`);
  } else {
    console.log(`Nao sao Multiplos`);
  }
}

function checkIsMultiple(a: number, b: number): boolean {
  const largerNumber = Math.max(a, b);
  const smallerNumber = Math.min(a, b);

  return smallerNumber !== 0 && largerNumber % smallerNumber === 0;
}

main();
