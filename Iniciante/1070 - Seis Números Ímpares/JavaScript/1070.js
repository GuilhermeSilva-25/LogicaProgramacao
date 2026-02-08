function main() {
  const input = require("fs").readFileSync(0, "utf8");
  let value = parseInt(input);

  if (value % 2 === 0) {
    value++;
  }

  for (let i = 0; i < 6; i++) {
    console.log(value);
    value += 2;
  }
}

main();
