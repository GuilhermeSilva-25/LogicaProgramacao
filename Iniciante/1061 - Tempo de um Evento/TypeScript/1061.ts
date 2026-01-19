import * as fs from "fs";

const SECONDS_IN_AN_DAY: number = 86400;
const SECONDS_IN_AN_HOUR: number = 3600;
const SECONDS_IN_AN_MINUTE: number = 60;

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  let values: string[] = lines[0].split(" ");
  const startDay: number = parseInt(values[1]);
  values = lines[1].split(" : ");
  const startHour: number = parseInt(values[0]);
  const startMinute: number = parseInt(values[1]);
  const startSecond: number = parseInt(values[2]);
  values = lines[2].split(" ");
  const endDay: number = parseInt(values[1]);
  values = lines[3].split(" : ");
  const endHour: number = parseInt(values[0]);
  const endMinute: number = parseInt(values[1]);
  const endSecond: number = parseInt(values[2]);
  const eventDuration: number[] = calculateEventDuration(
    startDay,
    startHour,
    startMinute,
    startSecond,
    endDay,
    endHour,
    endMinute,
    endSecond,
  );
  console.log(
    `${eventDuration[0]} dia(s)\n` +
      `${eventDuration[1]} hora(s)\n` +
      `${eventDuration[2]} minuto(s)\n` +
      `${eventDuration[3]} segundo(s)`,
  );
}

function calculateEventDuration(
  startDay: number,
  startHour: number,
  startMinute: number,
  startSecond: number,
  endDay: number,
  endHour: number,
  endMinute: number,
  endSecond: number,
) {
  const start: number =
    startDay * SECONDS_IN_AN_DAY +
    startHour * SECONDS_IN_AN_HOUR +
    startMinute * SECONDS_IN_AN_MINUTE +
    startSecond;

  const end: number =
    endDay * SECONDS_IN_AN_DAY +
    endHour * SECONDS_IN_AN_HOUR +
    endMinute * SECONDS_IN_AN_MINUTE +
    endSecond;

  let durationInSeconds: number = end - start;

  return convertTime(durationInSeconds);
}

function convertTime(durationInSeconds: number): number[] {
  const day: number = Math.floor(durationInSeconds / SECONDS_IN_AN_DAY);
  let leftoverTime: number = durationInSeconds % SECONDS_IN_AN_DAY;

  const hour: number = Math.floor(leftoverTime / SECONDS_IN_AN_HOUR);
  leftoverTime %= SECONDS_IN_AN_HOUR;

  const minute: number = Math.floor(leftoverTime / SECONDS_IN_AN_MINUTE);
  const second: number = leftoverTime % SECONDS_IN_AN_MINUTE;

  return [day, hour, minute, second];
}

main();
