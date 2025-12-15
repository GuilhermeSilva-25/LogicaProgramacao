function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split(" ");
  const [a, b, c, d] = lines.map(Number);
  if (areValuesAccepted(a, b, c, d)) {
    console.log("Valores aceitos");
  } else {
    console.log("Valores nao aceitos");
  }
}

function areValuesAccepted(a, b, c, d) {
  return b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0;
}


main();