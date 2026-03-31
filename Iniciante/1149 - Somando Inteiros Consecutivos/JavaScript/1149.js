function main() {
    const input = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number);

    let a = input[0];
    let n = input[1];
    let index = 2;

    while (n <= 0) {
        n = input[index];
        index++;
    }

    let sumTotal = 0;

    for (let i = 0; i < n; i++) {
        sumTotal += a + i;
    }

    console.log(sumTotal);
}

main();