import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const radius: number = parseFloat(input);
  const PI: number = 3.14159;
  const FRACTIONAL_CONSTANT: number = 4.0 / 3.0;
  const volumeSphere: number = FRACTIONAL_CONSTANT * PI * Math.pow(radius, 3);
  console.log(`VOLUME = ${volumeSphere.toFixed(3)}`);
}

main();
