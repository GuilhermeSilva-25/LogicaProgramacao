function main() {
  const input = require("fs").readFileSync(0, "utf8").trim().split("\n");

  const NUMBER_OF_VALUES = 5;

  let even = 0;
  let odd = 0;
  let positive = 0;
  let negative = 0;

  for (let i = 0; i < NUMBER_OF_VALUES; i++) {
    const value = Number(input[i]);

    if (value % 2 === 0) {
      even++;
    } else {
      odd++;
    }

    if (value > 0) {
      positive++;
    } else if (value < 0) {
      negative++;
    }
  }

  console.log(`${even} valor(es) par(es)`);
  console.log(`${odd} valor(es) impar(es)`);
  console.log(`${positive} valor(es) positivo(s)`);
  console.log(`${negative} valor(es) negativo(s)`);
}

main();
