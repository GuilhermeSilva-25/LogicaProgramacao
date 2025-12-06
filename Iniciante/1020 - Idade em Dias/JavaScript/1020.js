function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const ageInDays = parseInt(input);
  const convertedTime = convertTime(ageInDays);
  console.log(convertedTime);
}

function convertTime(ageInDays) {
  const DAYS_IN_A_YEAR = 365;
  const DAYS_IN_A_MONTH = 30;
  const years = Math.trunc(ageInDays / DAYS_IN_A_YEAR);
  const remainingDays = ageInDays % DAYS_IN_A_YEAR;
  const months = Math.trunc(remainingDays / DAYS_IN_A_MONTH)
  const days = remainingDays % DAYS_IN_A_MONTH;
  return `${years} ano(s)\n${months} mes(es)\n${days} dia(s)`;
}

main();
