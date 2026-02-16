import * as fs from "fs";

function main(): void {
    const input: string = fs.readFileSync(0, 'utf8').trim();
    const value: number = parseInt(input);

    for (let i = 1; i <= 10000; i++) {
        if (i % value === 2) {
            console.log(i);
        }
    }
}

main();
