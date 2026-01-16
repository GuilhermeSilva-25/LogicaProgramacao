import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const value: number = parseInt(input);
  const months = createCalendar();
  const month = identifyMonth(value, months);
  console.log(month);
}

function createCalendar(): Map<number, string> {
  const months = new Map<number, string>();

  months.set(1, "January");
  months.set(2, "February");
  months.set(3, "March");
  months.set(4, "April");
  months.set(5, "May");
  months.set(6, "June");
  months.set(7, "July");
  months.set(8, "August");
  months.set(9, "September");
  months.set(10, "October");
  months.set(11, "November");
  months.set(12, "December");

  return months;
}

function identifyMonth(value: number, months: Map<number, string>): string | undefined {
  return months.get(value);
}

main();
