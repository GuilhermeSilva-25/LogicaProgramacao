function main() {
  const input =  require("fs").readFileSync("/dev/stdin", "utf8");
  const originalNumbers = input.trim().split(/\s+/).map(Number);
  const orderedNumbers = sortNumbers(originalNumbers);
  const triangleType = checkTriangleType(orderedNumbers);
  console.log(triangleType.trim());
}

function sortNumbers(originalNumbers) {
  const copy = [...originalNumbers];
  copy.sort((a, b) => b - a);
  return copy;
}

function checkTriangleType(orderedNumbers) {
  let formattedText = "";
  const a = orderedNumbers[0];
  const b = orderedNumbers[1];
  const c = orderedNumbers[2];

  if (a >= b + c) {
    return "NAO FORMA TRIANGULO\n";
  }

  if (Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2)) {
    formattedText += "TRIANGULO RETANGULO\n";
  } else if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)) {
    formattedText += "TRIANGULO OBTUSANGULO\n";
  } else if (Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2)) {
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
