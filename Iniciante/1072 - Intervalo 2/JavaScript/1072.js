function main() {
  const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);
  let index = 0;
  const quantityOfValues = Number(input[index++]);
  let inside = 0;
  let outside = 0;

  for (let i = 0; i < quantityOfValues; i++) {
    const value = Number(input[index++]);
    if (value >= 10 && value <= 20) {
      inside++;
    } else {
      outside++;
    }
  }

  console.log(`${inside} in`);
  console.log(`${outside} out`);
}

main();
