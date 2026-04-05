import * as fs from "fs";

function main(): void {
    const input: string = fs.readFileSync(0, 'utf-8').trim();
    let n: number = parseInt(input);
    let factorialOfN: number = 1;

    while (n > 0) {
        factorialOfN *= n;
        n--;
    }

    console.log(factorialOfN);
}

main();