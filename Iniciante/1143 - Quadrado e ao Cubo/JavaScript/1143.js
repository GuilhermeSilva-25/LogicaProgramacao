function main() {
    const input = require('fs').readFileSync(0, 'utf-8').trim();
    const n = parseInt(input);

    for (let i = 1; i <= n; i++) {
        const square = i * i;
        const cube = i * i * i;
        console.log(`${i} ${square} ${cube}`);
    }
}

main();