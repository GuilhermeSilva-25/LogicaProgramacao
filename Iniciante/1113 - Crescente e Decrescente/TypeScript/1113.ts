import * as fs from "fs";

function main(): void {
    const input: number[] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
    let i: number = 0;

    while (true) {
        let x: number = input[i++];
        let y: number = input[i++];

        if (x === y) {
            break;
        } else if (x < y) {
            console.log("Crescente");
        } else {
            console.log("Decrescente");
        }
    }
}

main();