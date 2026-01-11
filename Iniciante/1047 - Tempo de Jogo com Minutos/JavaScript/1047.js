const TOTAL_MINUTES_IN_A_HOUR = 60;
const TOTAL_MINUTES_IN_A_DAY = 1440;

function main() {
    const input = require("fs").readFileSync("/dev/stdin", "utf8");
    const [startHour, startMinute, finalHour, finalMinute] = input.trim().split(/\s+/).map(Number);
    const [hours, minutes] = calculateGameDuration(startHour,startMinute,finalHour,finalMinute); 
    console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`);
}

function calculateGameDuration(startHour, startMinute, finalHour, finalMinute) {
    const startTotalMinutes = startHour * TOTAL_MINUTES_IN_A_HOUR + startMinute;
    const endTotalMinutes = finalHour * TOTAL_MINUTES_IN_A_HOUR + finalMinute;

    let durationInMinutes = endTotalMinutes - startTotalMinutes;

    if (durationInMinutes <= 0) {
        durationInMinutes += TOTAL_MINUTES_IN_A_DAY;
    }

    return convertTime(durationInMinutes);
}

function convertTime(time) {
    const hour = Math.floor(time / TOTAL_MINUTES_IN_A_HOUR);
    const minutes = time % TOTAL_MINUTES_IN_A_HOUR;
    return [hour, minutes];
}

main();