const input = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number);

let index = 0;
const n = input[index++];

for (let i = 0; i < n; i++) {
    let x = input[index++];
    let y = input[index++];

    let sumTotal = 0;
    let count = y;
    let value = x;

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