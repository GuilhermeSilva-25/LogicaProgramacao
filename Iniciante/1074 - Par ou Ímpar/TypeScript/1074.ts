import * as fs from "fs";

function main(): void {
  const input: string[] = fs.readFileSync(0, "utf8").trim().split("\n");
  let index: number = 0;
  const amount: number = parseInt(input[index++]);

  for (let i = 0; i < amount; i++) {
    const value: number = parseInt(input[index++]);

    if (value === 0) {
      console.log("NULL");
    } else {
      const parity = value % 2 !== 0 ? "ODD" : "EVEN";
      const sign = value > 0 ? "POSITIVE" : "NEGATIVE";
      console.log(`${parity} ${sign}`);
    }
  }
}

main();
