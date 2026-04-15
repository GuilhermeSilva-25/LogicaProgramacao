import * as fs from "fs";

const input: number[] = fs.readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number);

let index: number = 0;
const n: number = input[index++];

for (let i = 0; i < n; i++) {
    let x: number = input[index++];
    let y: number = input[index++];

    let sumTotal: number = 0;
    let count: number = y;
    let value: number = x;

    if (value % 2 === 0) {
        value++;
    }

    while (count > 0) {
        sumTotal += value;
        value += 2;
        count--;
    }

    console.log(sumTotal);
}