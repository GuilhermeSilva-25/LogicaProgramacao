function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const value = parseInt(input);
  for (let i = 1; i <= value; i += 2) {
    console.log(i);
  }
}

main();
