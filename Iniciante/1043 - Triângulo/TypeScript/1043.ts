import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const [a, b, c] = input.trim().split(/\s+/).map(Number);
  const isTriangle: boolean = checkIsTriangle(a, b, c);
  if (isTriangle) {
    const perimeter: number = calculatePerimeter(a, b, c);
    console.log(`Perimetro = ${perimeter.toFixed(1)}`);
  } else {
    const area: number = calculateArea(a, b, c);
    console.log(`Area = ${area.toFixed(1)}`);
  }
}

function checkIsTriangle(a: number, b: number, c: number): boolean {
  return a + b > c && a + c > b && b + c > a;
}

function calculatePerimeter(a: number, b: number, c: number): number {
  return a + b + c;
}

function calculateArea(a: number, b: number, c: number): number {
  return ((a + b) * c) / 2.0;
}

main();
