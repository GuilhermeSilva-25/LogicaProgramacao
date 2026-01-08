import * as fs from "fs";

const TOTAL_HOURS_IN_A_DAY: number = 24;

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const [startTime, finalTime] = input.trim().split(/\s+/).map(Number);
  const gameDuration: number = calculateGameDuration(startTime, finalTime);
  console.log(`O JOGO DUROU ${gameDuration} HORA(S)`);
}

function calculateGameDuration(startTime: number, finalTime: number): number {
  if (startTime > finalTime) {
    return finalTime + TOTAL_HOURS_IN_A_DAY - startTime;
  } else if (startTime === finalTime) {
    return TOTAL_HOURS_IN_A_DAY;
  } else {
    return finalTime - startTime;
  }
}

main();
