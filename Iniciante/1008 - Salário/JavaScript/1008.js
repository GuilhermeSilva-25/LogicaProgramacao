function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const [employeeNumber, hoursWorked, hourlyRate] = lines.map(Number);
  const wage = hoursWorked * hourlyRate;
  console.log(`NUMBER = ${employeeNumber}\nSALARY = U$ ${wage.toFixed(2)}`);
}

main();
