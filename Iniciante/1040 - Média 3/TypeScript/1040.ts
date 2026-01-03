import * as fs from "fs";

const WEIGHTS: number[] = [2, 3, 4, 1];

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.trim().split("\n");
  const grades: number[] = lines[0].trim().split(" ").map(Number);
  let average: number = calculateWeightedAverage(grades);
  average = truncateDecimal(average);
  console.log(`Media: ${average.toFixed(1)}`);
  if (average >= 7.0) {
    console.log("Aluno aprovado.");
  } else if (average < 5.0) {
    console.log("Aluno reprovado.");
  } else {
    console.log("Aluno em exame.");
    const examGrade: number = parseFloat(lines[1]);
    processExam(average, examGrade);
  }
}

function calculateWeightedAverage(grades: number[]): number {
  const sumOfWeights = WEIGHTS.reduce((acc, weight) => acc + weight, 0);

  const weightedSum = grades.reduce((acc, grade, index) => {
    return acc + grade * WEIGHTS[index];
  }, 0);

  return weightedSum / sumOfWeights;
}

function processExam(currentAverage: number, examGrade: number): void {
  console.log(`Nota do exame: ${examGrade.toFixed(1)}`);
  const finalAverage: number = (currentAverage + examGrade) / 2.0;
  if (finalAverage >= 5.0) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log(`Media final: ${finalAverage.toFixed(1)}`);
}

function truncateDecimal(value: number): number {
  return Math.floor(value * 10) / 10;
}

main();
