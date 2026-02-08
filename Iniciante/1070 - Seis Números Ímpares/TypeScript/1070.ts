import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync(0, "utf8");
  let value: number = parseInt(input);

  if (value % 2 === 0) {
    value++;
  }

  for (let i = 0; i < 6; i++) {
    console.log(value);
    value += 2;
  }
}

main();
