const BANKNOTES_LIST = [10000, 5000, 2000, 1000, 500, 200];
const COINS_LIST = [100, 50, 25, 10, 5, 1];

function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const value = parseFloat(input);
  let totalCents = Math.round(value * 100);
  console.log("NOTAS:");
  const remainingCents = calculateBanknotes(totalCents);
  console.log("MOEDAS:");
  calculateCoins(remainingCents);
}

function calculateBanknotes(totalCents) {
  for (let banknote of BANKNOTES_LIST) {
    let amountBanknotes = Math.trunc(totalCents / banknote);
    printQuantityBanknotes(amountBanknotes, banknote / 100);
    totalCents %= banknote;
  }
  return totalCents;
}

function calculateCoins(totalCents) {
  for (let coin of COINS_LIST) {
    let amountCoins = Math.trunc(totalCents / coin);
    printQuantityCoins(amountCoins, coin / 100);
    totalCents %= coin;
  }
}

function printQuantityBanknotes(amountBanknotes, banknoteValue) {
  console.log(`${amountBanknotes} nota(s) de R$ ${banknoteValue.toFixed(2)}`);
}

function printQuantityCoins(amountCoins, coinValue) {
  console.log(`${amountCoins} moeda(s) de R$ ${coinValue.toFixed(2)}`);
}

main();
