import * as fs from "fs";

const BANKNOTES_LIST: number[] = [10000, 5000, 2000, 1000, 500, 200];
const COINS_LIST: number[]  = [100, 50, 25, 10, 5, 1];

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const value: number = parseFloat(input);
  let totalCents: number = Math.round(value * 100);
  console.log("NOTAS:");
  const remainingCents: number = calculateBanknotes(totalCents);
  console.log("MOEDAS:");
  calculateCoins(remainingCents);
}

function calculateBanknotes(totalCents: number): number {
  for (let banknote of BANKNOTES_LIST) {
    let amountBanknotes: number = Math.trunc(totalCents / banknote);
    printQuantityBanknotes(amountBanknotes, banknote / 100);
    totalCents %= banknote;
  }
  return totalCents;
}

function calculateCoins(totalCents: number): void {
  for (let coin of COINS_LIST) {
    let amountCoins: number = Math.trunc(totalCents / coin);
    printQuantityCoins(amountCoins, coin / 100);
    totalCents %= coin;
  }
}

function printQuantityBanknotes(amountBanknotes: number, banknoteValue: number): void {
  console.log(`${amountBanknotes} nota(s) de R$ ${banknoteValue.toFixed(2)}`);
}

function printQuantityCoins(amountCoins: number, coinValue: number): void {
  console.log(`${amountCoins} moeda(s) de R$ ${coinValue.toFixed(2)}`);
}

main();
