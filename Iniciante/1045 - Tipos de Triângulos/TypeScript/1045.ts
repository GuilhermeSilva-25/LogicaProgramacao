import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const originalNumbers: number[] = input.trim().split(/\s+/).map(Number);
  const orderedNumbers: number[] = sortNumbers(originalNumbers);
  const triangleType: string = checkTriangleType(orderedNumbers);
  console.log(triangleType.trim());
}

function sortNumbers(originalNumbers: number[]): number[] {
  const copy = [...originalNumbers];
  copy.sort((a, b) => b - a);
  return copy;
}

function checkTriangleType(orderedNumbers: number[]): string {
  let formattedText: string = "";
  const a: number = orderedNumbers[0];
  const b: number = orderedNumbers[1];
  const c: number = orderedNumbers[2];

  if (a >= b + c) {
    return "NAO FORMA TRIANGULO\n";
  }

  if (a ** 2 == b ** 2 + c ** 2) {
    formattedText += "TRIANGULO RETANGULO\n";
  } else if (a ** 2 > b ** 2 + c ** 2) {
    formattedText += "TRIANGULO OBTUSANGULO\n";
  } else {
    formattedText += "TRIANGULO ACUTANGULO\n";
  }

  if (a == b && a == c) {
    formattedText += "TRIANGULO EQUILATERO\n";
  } else if (a == b || a == c || b == c) {
    formattedText += "TRIANGULO ISOSCELES\n";
  }

  return formattedText;
}

main();
