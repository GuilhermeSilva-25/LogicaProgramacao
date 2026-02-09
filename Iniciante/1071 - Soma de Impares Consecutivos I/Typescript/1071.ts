import * as fs from "fs";

function main(): void {
  const input: string[] = fs.readFileSync(0, "utf8").trim().split(/\s+/);
  const x: number = Number(input[0]);
  const y: number = Number(input[1]);
  let sum: number = 0;
  let end: number = Math.max(x, y);
  let start: number = Math.min(x, y) + 1;

  if (start % 2 === 0) {
    start += 1;
  }

  for (let i = start; i < end; i += 2) {
    sum += i;
  }

  console.log(sum);
}

main();
