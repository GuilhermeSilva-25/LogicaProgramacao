import * as fs from "fs";

function main(): void {
  const input: string[] = fs.readFileSync(0, "utf8").trim().split(/\s+/);
  let index: number = 0;
  const quantityOfValues: number = Number(input[index++]);
  let inside: number = 0;
  let outside: number = 0;

  for (let i = 0; i < quantityOfValues; i++) {
    const value: number = Number(input[index++]);
    if (value >= 10 && value <= 20) {
      inside++;
    } else {
      outside++;
    }
  }

  console.log(`${inside} in`);
  console.log(`${outside} out`);
}

main();
