import * as fs from "fs";

const NUMBER_OF_VALUES: number = 5;

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.trim().split("\n");
  let numberOfEvenValues: number = 0;
  for (let i = 0; i < NUMBER_OF_VALUES; i++) {
    const value: number = parseInt(lines[i], 10);
    if (value % 2 === 0) {
      numberOfEvenValues++;
    }
  }
  console.log(`${numberOfEvenValues} valores pares`);
}

main();
