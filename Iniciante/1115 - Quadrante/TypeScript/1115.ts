import * as fs from "fs";

function main(): void {
    const input: number[] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
    let i: number = 0;

    while (true) {
        let x: number = input[i++];
        let y: number = input[i++];

        if (x === 0 || y === 0) {
            break;
        } else if (x > 0 && y > 0) {
            console.log("primeiro");
        } else if (x < 0 && y > 0) {
            console.log("segundo");
        } else if (x < 0 && y < 0) {
            console.log("terceiro");
        } else {
            console.log("quarto");
        }
    }
}

main();