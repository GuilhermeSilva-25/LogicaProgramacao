import * as fs from "fs";

const TOTAL_MINUTES_IN_A_HOUR: number = 60;
const TOTAL_MINUTES_IN_A_DAY: number = 1440;

function main(): void {
    const input: string = fs.readFileSync("/dev/stdin", "utf8");
    const [startHour, startMinute, finalHour, finalMinute] = input.trim().split(/\s+/).map(Number);
    const [hours, minutes] = calculateGameDuration(startHour,startMinute,finalHour,finalMinute); 
    console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`);
}

function calculateGameDuration(startHour: number, startMinute: number, finalHour: number, finalMinute: number): [number, number] {
    const startTotalMinutes: number = startHour * TOTAL_MINUTES_IN_A_HOUR + startMinute;
    const endTotalMinutes: number = finalHour * TOTAL_MINUTES_IN_A_HOUR + finalMinute;

    let durationInMinutes: number = endTotalMinutes - startTotalMinutes;

    if (durationInMinutes <= 0) {
        durationInMinutes += TOTAL_MINUTES_IN_A_DAY;
    }

    return convertTime(durationInMinutes);
}

function convertTime(time: number): [number, number] {
    const hour: number = Math.floor(time / TOTAL_MINUTES_IN_A_HOUR);
    const minutes: number = time % TOTAL_MINUTES_IN_A_HOUR;
    return [hour, minutes];
}

main();