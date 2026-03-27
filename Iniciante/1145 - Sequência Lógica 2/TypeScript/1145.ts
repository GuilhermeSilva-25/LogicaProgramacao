import * as fs from 'fs';

function main(): void {
    const input: string[] = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

    let x: number = parseInt(input[0], 10);
    let y: number = parseInt(input[1], 10);
    let counter: number = 0;

    for (let i: number = 1; i <= y; i++) {
        process.stdout.write(i.toString());
        counter++;

        if (counter < x) {
            process.stdout.write(" ");
        } else {
            process.stdout.write("\n");
            counter = 0;
        }
    }
}

main();