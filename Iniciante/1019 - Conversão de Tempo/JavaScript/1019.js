function main() {
  const input = require('fs').readFileSync('/dev/stdin', 'utf8');
  const durationInSeconds = parseInt(input);
  const convertedTime = convertTime(durationInSeconds);
  console.log(convertedTime);
}

function convertTime(durationInSeconds) {
  const SECONDS_IN_HOUR = 3600;
  const SECONDS_IN_MINUTE = 60;
  const hours = Math.trunc(durationInSeconds / SECONDS_IN_HOUR);
  const minutes = Math.trunc((durationInSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const seconds = durationInSeconds % SECONDS_IN_MINUTE;
  return `${hours}:${minutes}:${seconds}`;
}

main();
