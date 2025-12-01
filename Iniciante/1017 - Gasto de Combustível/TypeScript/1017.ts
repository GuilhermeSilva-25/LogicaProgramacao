import * as fs from "fs";

function main(): void {
    const input: string = fs.readFileSync("/dev/stdin", "utf8");
    const lines: string[] = input.split("\n");
    const [hoursSpentTraveling, averageSpeed] = lines.map(Number);
    const fuelRequired: number = calculateFuelRequired(hoursSpentTraveling, averageSpeed);
    console.log(`${fuelRequired.toFixed(3)}`);
}

function calculateFuelRequired(hoursSpentTraveling: number, averageSpeed: number): number {
    const  KILOMETERS_PER_LITER: number = 12.0;
    return (hoursSpentTraveling * averageSpeed) / KILOMETERS_PER_LITER;
}

main();