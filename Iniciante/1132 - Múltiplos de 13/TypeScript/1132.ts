import * as fs from "fs";

function main(): void {
    const input: string[] = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);
    const x: number = parseInt(input[0]);
    const y: number = parseInt(input[1]);
    let sum: number = 0;
    const end: number = Math.max(x, y);
    const start: number = Math.min(x, y);

    for (let i = start; i <= end; i++) {
        if (i % 13 !== 0) {
            sum += i;
        }
    }

    console.log(sum);
}

main();