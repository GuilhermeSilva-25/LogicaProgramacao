import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const [a, b] = lines.map(Number);
  const result: number = a + b;
  console.log(`SOMA = ${result}`);
}

main();
