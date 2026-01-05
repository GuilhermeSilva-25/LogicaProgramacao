function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const [a, b, c] = input.trim().split(/\s+/).map(Number);
  const isTriangle = checkIsTriangle(a, b, c);
  if (isTriangle) {
    const perimeter = calculatePerimeter(a, b, c);
    console.log(`Perimetro = ${perimeter.toFixed(1)}`);
  } else {
    const area = calculateArea(a, b, c);
    console.log(`Area = ${area.toFixed(1)}`);
  }
}

function checkIsTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function calculatePerimeter(a, b, c) {
  return a + b + c;
}

function calculateArea(a, b, c) {
  return ((a + b) * c) / 2.0;
}

main();
