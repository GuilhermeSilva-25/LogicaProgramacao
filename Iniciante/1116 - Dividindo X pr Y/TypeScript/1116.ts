import * as fs from "fs";

function main(): void {
  const input: number[] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

  let index: number = 0;
  const n: number = input[index++];

  for (let i = 0; i < n; i++) {
    const x: number = input[index++];
    const y: number = input[index++];

    if (y === 0) {
      console.log("divisao impossivel");
    } else {
      console.log((x / y).toFixed(1));
    }
  }
}

main();
