import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync('/dev/stdin', 'utf8');
  const durationInSeconds: number = parseInt(input);
  const convertedTime: string = convertTime(durationInSeconds);
  console.log(convertedTime);
}

function convertTime(durationInSeconds: number): string {
  const SECONDS_IN_HOUR: number = 3600;
  const SECONDS_IN_MINUTE: number = 60;
  const hours: number = Math.trunc(durationInSeconds / SECONDS_IN_HOUR);
  const minutes: number = Math.trunc((durationInSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const seconds: number = durationInSeconds % SECONDS_IN_MINUTE;
  return `${hours}:${minutes}:${seconds}`;
}

main();
