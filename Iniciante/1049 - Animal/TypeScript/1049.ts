import * as fs from "fs";

type AnimalMap = {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
};

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.trim().split("\n");
  const word1: string = lines[0];
  const word2: string = lines[1];
  const word3: string = lines[2];
  const animals: AnimalMap = createMapAnimals();
  const animal: string = identifyAnimal(word1, word2, word3, animals);
  print(animal);
}

function createMapAnimals(): AnimalMap {
  const animals: AnimalMap = {};
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

function identifyAnimal(word1: string, word2: string, word3: string, animals: AnimalMap): string {
  return animals[word1][word2][word3];
}

function print(animal: string): void {
  console.log(animal);
}

main();
