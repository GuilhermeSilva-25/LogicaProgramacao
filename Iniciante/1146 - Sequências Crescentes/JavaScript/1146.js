function main() {
    const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

    let index = 0;

    while (true) {
        let x = Number(input[index++]);

        if (x === 0) {
            return;
        }

        let result = [];

        for (let i = 1; i <= x; i++) {
            result.push(i);
        }

        console.log(result.join(' '));
    }
}

main();