import * as fs from "fs";

function main(): void {
    const input: string[] = fs.readFileSync(0, 'utf-8').trim().split('\n');

    const x: number = parseInt(input[0]);
    const y: number = parseInt(input[1]);

    const start: number = Math.min(x, y) + 1;
    const end: number = Math.max(x, y);

    for (let i = start; i < end; i++) {
        if (i % 5 === 2 || i % 5 === 3) {
            console.log(i);
        }
    }
}

main();