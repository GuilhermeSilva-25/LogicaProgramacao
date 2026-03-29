import * as fs from "fs";

function main(): void {
    const input: string[] = fs.readFileSync(0, 'utf-8').trim().split('\n');

    let index: number = 0;

    while (true) {
        let x: number = Number(input[index++]);

        if (x === 0) {
            return;
        }

        let result: number[] = [];

        for (let i = 1; i <= x; i++) {
            result.push(i);
        }

        console.log(result.join(' '));
    }
}

main();