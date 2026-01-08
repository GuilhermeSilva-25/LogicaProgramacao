const TOTAL_HOURS_IN_A_DAY = 24;

function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const [startTime, finalTime] = input.trim().split(/\s+/).map(Number);
  const gameDuration = calculateGameDuration(startTime, finalTime);
  console.log(`O JOGO DUROU ${gameDuration} HORA(S)`);
}

function calculateGameDuration(startTime, finalTime) {
  if (startTime > finalTime) {
    return finalTime + TOTAL_HOURS_IN_A_DAY - startTime;
  } else if (startTime == finalTime) {
    return TOTAL_HOURS_IN_A_DAY;
  } else {
    return finalTime - startTime;
  }
}

main();
