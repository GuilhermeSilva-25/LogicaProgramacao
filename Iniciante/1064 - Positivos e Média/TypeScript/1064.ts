import * as fs from "fs";

function main(): void {
    const input: string[] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
    const QUANTITY_OF_VALUES: number = 6;
    let count: number = 0;
    let sum: number = 0.0;

    for (let i = 0; i < QUANTITY_OF_VALUES; i++) {
        const value = parseFloat(input[i]);
        if (value > 0) {
            count++;
            sum += value;
        }
    }

    console.log(`${count} valores positivos`);
    console.log((sum / count).toFixed(1));
}

main();
