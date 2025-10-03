import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const [employeeNumber, hoursWorked, hourlyRate] = lines.map(Number);
  const wage: number = hoursWorked * hourlyRate;
  console.log(`NUMBER = ${employeeNumber}\nSALARY = U$ ${wage.toFixed(2)}`);
}

main();
