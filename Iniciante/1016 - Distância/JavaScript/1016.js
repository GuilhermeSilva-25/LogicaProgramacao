function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const distance = parseInt(input);
  const time = calculateTime(distance);
  console.log(`${time} minutos`);
}

function calculateTime(distance) {
    const TIME_PER_KILOMETER = 2;
    return distance * TIME_PER_KILOMETER;
}

main();
