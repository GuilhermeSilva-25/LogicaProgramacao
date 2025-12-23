function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const value = parseFloat(input);
  const interval = selectRange(value);
  console.log(interval);
}

function selectRange(value) {
  if (value < 0 || value > 100) {
    return "Fora de intervalo";
  } else if (value >= 0 && value <= 25) {
    return "Intervalo [0,25]";
  } else if (value <= 50) {
    return "Intervalo (25,50]";
  } else if (value <= 75) {
    return "Intervalo (50,75]";
  } else {
    return "Intervalo (75,100]";
  }
}

main();
