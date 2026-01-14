import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8").trim();
  const ddd: number = Number(input);
  const ddds = createMapDDD();
  const city = identifyCity(ddd, ddds);

  console.log(city);
}

function createMapDDD(): Map<number, string> {
  const ddds = new Map<number, string>();

  ddds.set(61, "Brasilia");
  ddds.set(71, "Salvador");
  ddds.set(11, "Sao Paulo");
  ddds.set(21, "Rio de Janeiro");
  ddds.set(32, "Juiz de Fora");
  ddds.set(19, "Campinas");
  ddds.set(27, "Vitoria");
  ddds.set(31, "Belo Horizonte");

  return ddds;
}

function identifyCity(ddd: number, ddds: Map<number, string>): string {
  if (ddds.has(ddd)) {
    return ddds.get(ddd)!;
  } else {
    return "DDD nao cadastrado";
  }
}

main();
