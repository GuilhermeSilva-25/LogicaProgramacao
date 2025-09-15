import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const PI: number = 3.14159;
  const radius: number = parseFloat(input);
  const area: number = PI * Math.pow(radius, 2);
  console.log(`A=${area.toFixed(4)}`);
}

main();
