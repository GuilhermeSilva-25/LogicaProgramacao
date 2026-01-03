import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.trim().split(/\s+/);
  const [x, y] = lines.map(Number);
  const location: string = determineLocation(x, y);
  console.log(location);
}

function determineLocation(x: number, y: number): string {
  if (x === 0 && y === 0) {
    return "Origem";
  } else if (x === 0) {
    return "Eixo Y";
  } else if (y === 0) {
    return "Eixo X";
  } else if (x > 0 && y > 0) {
    return "Q1";
  } else if (x < 0 && y > 0) {
    return "Q2";
  } else if (x < 0 && y < 0) {
    return "Q3";
  } else {
    return "Q4";
  }
}

main();
