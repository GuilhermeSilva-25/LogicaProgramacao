const WEIGHTS = [2, 3, 4, 1];

function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.trim().split("\n");
  const grades = lines[0].trim().split(" ").map(Number);
  let average = calculateWeightedAverage(grades);
  average = truncateDecimal(average);
  console.log(`Media: ${average.toFixed(1)}`);
  if (average >= 7.0) {
    console.log("Aluno aprovado.");
  } else if (average < 5.0) {
    console.log("Aluno reprovado.");
  } else {
    console.log("Aluno em exame.");
    const examGrade = parseFloat(lines[1]);
    processExam(average, examGrade);
  }
}

function calculateWeightedAverage(grades) {
  const sumOfWeights = WEIGHTS.reduce((acc, weight) => acc + weight, 0);

  const weightedSum = grades.reduce((acc, grade, index) => {
    return acc + grade * WEIGHTS[index];
  }, 0);

  return weightedSum / sumOfWeights;
}

function processExam(currentAverage, examGrade) {
  console.log(`Nota do exame: ${examGrade.toFixed(1)}`);

  const finalAverage = (currentAverage + examGrade) / 2.0;

  if (finalAverage >= 5.0) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }

  console.log(`Media final: ${finalAverage.toFixed(1)}`);
}

function truncateDecimal(value) {
  return Math.floor(value * 10) / 10;
}

main();
