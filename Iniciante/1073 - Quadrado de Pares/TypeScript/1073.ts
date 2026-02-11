import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const value: number = parseInt(input);

  for (let i = 2; i <= value; i += 2) {
    console.log(`${i}^2 = ${i * i}`);
  }
}

main();
