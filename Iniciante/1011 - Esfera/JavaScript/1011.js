function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const radius = parseFloat(input);
  const PI = 3.14159;
  const FRACTIONAL_CONSTANT = 4.0 / 3.0;
  const volumeSphere = FRACTIONAL_CONSTANT * PI * Math.pow(radius, 3);
  console.log(`VOLUME = ${volumeSphere.toFixed(3)}`);
}

main();
