import * as fs from "fs";

function main(): void {
    const input: string[] = fs.readFileSync(0, 'utf-8').trim().split('\n');

    let numberOfAges: number = 0;
    let sumOfAges: number = 0;

    for (let i = 0; i < input.length; i++) {
        let age: number = parseInt(input[i]);

        if (age < 0) {
            break;
        }

        numberOfAges++;
        sumOfAges += age;
    }

    let averageAges: number = sumOfAges / numberOfAges;
    console.log(averageAges.toFixed(2));
}

main();