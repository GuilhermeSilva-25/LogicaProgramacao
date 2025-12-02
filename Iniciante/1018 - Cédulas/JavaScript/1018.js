const BANKNOTES = [100, 50, 20, 10, 5, 2, 1];

function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const value = parseInt(input);
  console.log(value);
  calculateBanknotes(value);
}

function calculateBanknotes(value) {
  for (let banknote of BANKNOTES) {
    amountBanknotes = Math.trunc(value / banknote);
    printQuantityBanknotes(amountBanknotes, banknote);
    value %= banknote;
  }
}

function printQuantityBanknotes(amountBanknotes, banknoteValue) {
  console.log(`${amountBanknotes} nota(s) de R$ ${banknoteValue},00`);
}

main();
