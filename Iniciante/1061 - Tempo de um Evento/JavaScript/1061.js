const SECONDS_IN_AN_DAY = 86400;
const SECONDS_IN_AN_HOUR = 3600;
const SECONDS_IN_AN_MINUTE = 60;

function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  let values = lines[0].split(" ");
  const startDay = parseInt(values[1]);
  values = lines[1].split(" : ");
  const startHour = parseInt(values[0]);
  const startMinute = parseInt(values[1]);
  const startSecond = parseInt(values[2]);
  values = lines[2].split(" ");
  const endDay = parseInt(values[1]);
  values = lines[3].split(" : ");
  const endHour = parseInt(values[0]);
  const endMinute = parseInt(values[1]);
  const endSecond = parseInt(values[2]);
  const eventDuration = calculateEventDuration(
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
  startDay,
  startHour,
  startMinute,
  startSecond,
  endDay,
  endHour,
  endMinute,
  endSecond,
) {
  const start =
    startDay * SECONDS_IN_AN_DAY +
    startHour * SECONDS_IN_AN_HOUR +
    startMinute * SECONDS_IN_AN_MINUTE +
    startSecond;

  const end =
    endDay * SECONDS_IN_AN_DAY +
    endHour * SECONDS_IN_AN_HOUR +
    endMinute * SECONDS_IN_AN_MINUTE +
    endSecond;

  let durationInSeconds = end - start;

  return convertTime(durationInSeconds);
}

function convertTime(durationInSeconds) {
  const day = Math.floor(durationInSeconds / SECONDS_IN_AN_DAY);
  let leftoverTime = durationInSeconds % SECONDS_IN_AN_DAY;

  const hour = Math.floor(leftoverTime / SECONDS_IN_AN_HOUR);
  leftoverTime %= SECONDS_IN_AN_HOUR;

  const minute = Math.floor(leftoverTime / SECONDS_IN_AN_MINUTE);
  const second = leftoverTime % SECONDS_IN_AN_MINUTE;

  return [day, hour, minute, second];
}

main();
