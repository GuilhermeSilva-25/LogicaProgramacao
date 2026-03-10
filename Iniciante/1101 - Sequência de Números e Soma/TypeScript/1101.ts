import * as fs from "fs";

function main(): void {
  const input: number[] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

  let index: number = 0;

  while (true) {
    let m: number = input[index++];
    let n: number = input[index++];

    if (m <= 0 || n <= 0) {
      break;
    }

    let sum: number = 0;
    let start: number = Math.min(m, n);
    let end: number = Math.max(m, n);

    let line: string = "";

    for (let i = start; i <= end; i++) {
      line += i + " ";
      sum += i;
    }

    console.log(line + "Sum=" + sum);
  }
}

main();
