function main() {
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

  let index = 0;

  while (true) {
    let m = input[index++];
    let n = input[index++];

    if (m <= 0 || n <= 0) {
      break;
    }

    let sum = 0;
    let start = Math.min(m, n);
    let end = Math.max(m, n);

    let line = "";

    for (let i = start; i <= end; i++) {
      line += i + " ";
      sum += i;
    }

    console.log(line + "Sum=" + sum);
  }
}

main();
