function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.trim().split("\n");
  const word1 = lines[0];
  const word2 = lines[1];
  const word3 = lines[2];
  const animals = createMapAnimals();
  const animal = identifyAnimal(word1, word2, word3, animals);
  print(animal);
}

function createMapAnimals() {
  const animals = {};
  animals["vertebrado"] = {};
  animals["invertebrado"] = {};
  animals["vertebrado"]["ave"] = {};
  animals["vertebrado"]["mamifero"] = {};
  animals["invertebrado"]["inseto"] = {};
  animals["invertebrado"]["anelideo"] = {};
  animals["vertebrado"]["ave"]["carnivoro"] = "aguia";
  animals["vertebrado"]["ave"]["onivoro"] = "pomba";
  animals["vertebrado"]["mamifero"]["onivoro"] = "homem";
  animals["vertebrado"]["mamifero"]["herbivoro"] = "vaca";
  animals["invertebrado"]["inseto"]["hematofago"] = "pulga";
  animals["invertebrado"]["inseto"]["herbivoro"] = "lagarta";
  animals["invertebrado"]["anelideo"]["hematofago"] = "sanguessuga";
  animals["invertebrado"]["anelideo"]["onivoro"] = "minhoca";
  return animals;
}

function identifyAnimal(word1, word2, word3, animals) {
  return animals[word1][word2][word3];
}

function print(animal) {
  console.log(animal);
}

main();
