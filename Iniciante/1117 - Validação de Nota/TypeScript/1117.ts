import * as fs from "fs";

function main(): void {
  const input: string[] = fs.readFileSync(0, "utf-8").trim().split("\n");

  let sumOfGrades: number = 0;
  let counter: number = 0;
  let i: number = 0;

  while (counter < 2) {
    let grade: number = parseFloat(input[i]);
    i++;

    if (grade >= 0 && grade <= 10) {
      sumOfGrades += grade;
      counter++;
    } else {
      console.log("nota invalida");
    }
  }

  console.log("media = " + (sumOfGrades / 2).toFixed(2));
}

main();
