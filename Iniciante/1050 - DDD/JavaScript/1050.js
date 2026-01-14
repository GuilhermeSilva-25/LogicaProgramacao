function main() {
  const input = require("fs").readFileSync(0, "utf8").trim();
  const ddd = Number(input);
  const ddds = createMapDDD();
  const city = identifyCity(ddd, ddds);
  console.log(city);
}

function createMapDDD() {
  const ddds = new Map();

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

function identifyCity(ddd, ddds) {
  if (ddds.has(ddd)) {
    return ddds.get(ddd);
  } else {
    return "DDD nao cadastrado";
  }
}

main();
