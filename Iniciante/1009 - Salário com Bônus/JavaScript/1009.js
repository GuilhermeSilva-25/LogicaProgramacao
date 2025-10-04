function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const sellerName = lines.shift();
  const [fixedSalary, totalSales] = lines.map(Number);
  const COMMISSION_RATE = 0.15;
  const commission = totalSales * COMMISSION_RATE;
  const totalSalary = fixedSalary + commission;
  console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);
}

main();
