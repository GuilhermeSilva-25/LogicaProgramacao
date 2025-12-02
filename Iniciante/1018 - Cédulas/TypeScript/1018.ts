import * as fs from "fs";
const BANKNOTES: number[] = [100, 50, 20, 10, 5, 2, 1];

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const value: number = parseInt(input);
  console.log(value);
  calculateBanknotes(value);
}

function calculateBanknotes(value: number): void {
  for (let banknote of BANKNOTES) {
    const amountBanknotes: number = Math.trunc(value / banknote);
    printQuantityBanknotes(amountBanknotes, banknote);
    value %= banknote;
  }
}

function printQuantityBanknotes(amountBanknotes: number, banknoteValue: number): void {
  console.log(`${amountBanknotes} nota(s) de R$ ${banknoteValue},00`);
}

main();
