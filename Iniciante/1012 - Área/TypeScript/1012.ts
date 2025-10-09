import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split(" ");
  const [a, b, c] = lines.map(Number);
  const PI: number = 3.14159;
  const triangleArea: number = calculateTriangleArea(a, c);
  const circleArea: number = calculateCircleArea(c, PI);
  const trapezoidArea: number = calculateTrapezoidArea(a, b, c);
  const squareArea: number = calculateSquareArea(b);
  const rectangleArea: number = calculateRectangleArea(a, b);
  console.log(`TRIANGULO: ${triangleArea.toFixed(3)}`);
  console.log(`CIRCULO: ${circleArea.toFixed(3)}`);
  console.log(`TRAPEZIO: ${trapezoidArea.toFixed(3)}`);
  console.log(`QUADRADO: ${squareArea.toFixed(3)}`);
  console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`);
}

function calculateTriangleArea(cathetus1: number, cathetus2: number): number {
  return (cathetus1 * cathetus2) / 2.0;
}

function calculateCircleArea(radius: number, pi: number): number {
  return pi * radius ** 2;
}

function calculateTrapezoidArea(base1: number, base2: number, height: number): number {
  return ((base1 + base2) * height) / 2.0;
}

function calculateSquareArea(side: number): number {
  return side * side;
}

function calculateRectangleArea(base: number, height: number): number {
  return base * height;
}

main();
