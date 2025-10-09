function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split(" ");
  const [a, b, c] = lines.map(Number);
  const PI = 3.14159;
  const triangleArea = calculateTriangleArea(a, c);
  const circleArea = calculateCircleArea(c, PI);
  const trapezoidArea = calculateTrapezoidArea(a, b, c);
  const squareArea = calculateSquareArea(b);
  const rectangleArea = calculateRectangleArea(a, b);
  console.log(`TRIANGULO: ${triangleArea.toFixed(3)}`);
  console.log(`CIRCULO: ${circleArea.toFixed(3)}`);
  console.log(`TRAPEZIO: ${trapezoidArea.toFixed(3)}`);
  console.log(`QUADRADO: ${squareArea.toFixed(3)}`);
  console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`);
}

function calculateTriangleArea(cathetus1, cathetus2) {
  return (cathetus1 * cathetus2) / 2.0;
}

function calculateCircleArea(radius, pi) {
  return pi * radius ** 2;
}

function calculateTrapezoidArea(base1, base2, height) {
  return ((base1 + base2) * height) / 2.0;
}

function calculateSquareArea(side) {
  return side * side;
}

function calculateRectangleArea(base, height) {
  return base * height;
}

main();
