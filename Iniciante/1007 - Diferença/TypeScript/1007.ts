import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const [a, b, c, d] = lines.map(Number);
  const difference: number = a * b - c * d;
  console.log(`DIFERENCA = ${difference}`);
}

main();
