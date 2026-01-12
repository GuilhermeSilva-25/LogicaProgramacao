import * as fs from "fs";

const PERCENTAGE_OF_READJUSTMENT: number[] = [0.15, 0.12, 0.1, 0.07, 0.04];

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const salary: number = parseFloat(input);
  const readjustment: number = defineReadjustmentPercentage(salary);
  const salaryIncrease: number = salary * readjustment;
  const newSalary: number = salary + salaryIncrease;
  printResult(readjustment, salaryIncrease, newSalary);
}

function defineReadjustmentPercentage(salary: number): number {
  if (salary <= 400.0) {
    return PERCENTAGE_OF_READJUSTMENT[0];
  } else if (salary <= 800.0) {
    return PERCENTAGE_OF_READJUSTMENT[1];
  } else if (salary <= 1200.0) {
    return PERCENTAGE_OF_READJUSTMENT[2];
  } else if (salary <= 2000.0) {
    return PERCENTAGE_OF_READJUSTMENT[3];
  } else {
    return PERCENTAGE_OF_READJUSTMENT[4];
  }
}

function printResult(readjustment: number, salaryIncrease: number, newSalary: number) {
  console.log(`Novo salario: ${newSalary.toFixed(2)}`);
  console.log(`Reajuste ganho: ${salaryIncrease.toFixed(2)}`);
  console.log(`Em percentual: ${(readjustment * 100).toFixed(0)} %`);
}

main();
