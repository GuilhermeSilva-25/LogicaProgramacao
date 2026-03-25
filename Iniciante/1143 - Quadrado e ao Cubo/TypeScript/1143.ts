import * as fs from "fs";

function main(): void {
    const input: string = fs.readFileSync(0, 'utf-8').trim();
    const n: number = parseInt(input);

    for (let i = 1; i <= n; i++) {
        const square: number = i * i;
        const cube: number = i * i * i;
        console.log(`${i} ${square} ${cube}`);
    }
}

main();