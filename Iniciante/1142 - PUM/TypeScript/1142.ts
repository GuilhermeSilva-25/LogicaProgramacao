import * as fs from "fs";

function main(): void {
    const input: string = fs.readFileSync(0, 'utf-8').trim();
    const n: number = parseInt(input);

    let value: number = 1;

    for (let i = 0; i < n; i++) {
        let line: string = "";

        for (let j = value; j <= value + 2; j++) {
            line += j + " ";
        }

        value += 4;
        console.log(line + "PUM");
    }
}

main();