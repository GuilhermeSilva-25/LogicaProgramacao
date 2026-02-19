import * as fs from "fs";

const QUANTITY_OF_VALUES: number = 100;

function main(): void {
    const input: string[] = fs.readFileSync(0, 'utf8').trim().split('\n');
    
    let higherValue: number = Number.NEGATIVE_INFINITY;;
    let position: number = 0;

    for (let i = 0; i < QUANTITY_OF_VALUES; i++) {
        const value: number = parseInt(input[i]);
        if (value > higherValue) {
            higherValue = value;
            position = i + 1;
        }
    }

    console.log(higherValue);
    console.log(position);
}

main();
