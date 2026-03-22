function main() {
    const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

    const x = parseInt(input[0]);
    const y = parseInt(input[1]);

    const start = Math.min(x, y) + 1;
    const end = Math.max(x, y);

    for (let i = start; i < end; i++) {
        if (i % 5 === 2 || i % 5 === 3) {
            console.log(i);
        }
    }
}

main();