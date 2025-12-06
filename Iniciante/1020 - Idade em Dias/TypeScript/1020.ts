import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const ageInDays: number = parseInt(input);
  const convertedTime: string = convertTime(ageInDays);
  console.log(convertedTime);
}

function convertTime(ageInDays: number): string {
  const DAYS_IN_A_YEAR: number = 365;
  const DAYS_IN_A_MONTH: number = 30;
  const years: number = Math.trunc(ageInDays / DAYS_IN_A_YEAR);
  const remainingDays: number = ageInDays % DAYS_IN_A_YEAR;
  const months: number =  Math.trunc(remainingDays / DAYS_IN_A_MONTH)
  const days: number = remainingDays % DAYS_IN_A_MONTH;
  return `${years} ano(s)\n${months} mes(es)\n${days} dia(s)`;
}

main();
