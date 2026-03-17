function main() {
  const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

  let sumOfGrades = 0;
  let counter = 0;
  let i = 0;

  while (counter < 2) {
    let grade = parseFloat(input[i]);
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
