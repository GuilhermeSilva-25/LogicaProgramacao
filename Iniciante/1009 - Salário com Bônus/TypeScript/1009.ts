import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const sellerName: string = lines.shift()!;
  const [fixedSalary, totalSales] = lines.map(Number);
  const COMMISSION_RATE: number = 0.15;
  const commission: number = totalSales * COMMISSION_RATE;
  const totalSalary: number = fixedSalary + commission;
  console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);
}

main();
