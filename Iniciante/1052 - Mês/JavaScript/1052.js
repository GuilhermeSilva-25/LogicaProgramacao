function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const value = parseInt(input);
  const months = createCalendar();
  const month = identifyMonth(value, months);
  console.log(month);
}

function createCalendar() {
  const months = new Map();

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

function identifyMonth(value, months) {
  return months.get(value);
}

main();
