function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const n = parseInt(input.trim());

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

main();
