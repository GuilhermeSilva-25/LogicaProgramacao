function main() {
    const input = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/);
    const x = parseInt(input[0]);
    const y = parseInt(input[1]);
    let sum = 0;
    const end = Math.max(x, y);
    const start = Math.min(x, y);

    for (let i = start; i <= end; i++) {
        if (i % 13 !== 0) {
            sum += i;
        }
    }

    console.log(sum);
}

main();