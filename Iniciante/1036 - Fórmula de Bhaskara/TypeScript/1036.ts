import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.trim().split(/\s+/);
  const [a, b, c] = lines.map(Number);
  const delta: number = calculateDelta(a, b, c);
  
  if (delta < 0 || a === 0.0) {
    console.log("Impossivel calcular");
  } else {
    const [r1, r2] = calculateRoots(a, b, delta);
    printRoots(r1, r2);
  }
}

function calculateDelta(a: number, b: number, c: number): number {
  return Math.pow(b, 2) - 4 * a * c;
}

function calculateRoots(a: number, b: number, delta: number): [number, number] {
  const r1 = (-b + Math.sqrt(delta)) / (2 * a);
  const r2 = (-b - Math.sqrt(delta)) / (2 * a);
  return [r1, r2];
}

function printRoots(r1: number, r2: number): void {
  console.log(`R1 = ${r1.toFixed(5)}`);
  console.log(`R2 = ${r2.toFixed(5)}`);
}

main();
