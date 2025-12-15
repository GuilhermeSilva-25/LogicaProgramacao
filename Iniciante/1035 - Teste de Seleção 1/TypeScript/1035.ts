import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.trim().split(/\s+/);
  const [a, b, c, d] = lines.map(Number);
  if (areValuesAccepted(a, b, c, d)) {
    console.log("Valores aceitos");
  } else {
    console.log("Valores nao aceitos");
  }
}

function areValuesAccepted(a: number, b: number, c: number, d: number): boolean {
  return b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0;
}


main();