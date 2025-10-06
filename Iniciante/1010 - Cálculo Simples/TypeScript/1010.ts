import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const [idPart1, amountPart1, pricePart1] = lines[0].split(" ").map(Number);
  const [idPart2, amountPart2, pricePart2] = lines[1].split(" ").map(Number);
  const totalValue: number =
    amountPart1 * pricePart1 + amountPart2 * pricePart2;
  console.log(`VALOR A PAGAR: R$ ${totalValue.toFixed(2)}`);
}

main();
