function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const PI = 3.14159;
  const radius = parseFloat(input);
  const area = PI * Math.pow(radius, 2);
  console.log(`A=${area.toFixed(4)}`);
}

main();
