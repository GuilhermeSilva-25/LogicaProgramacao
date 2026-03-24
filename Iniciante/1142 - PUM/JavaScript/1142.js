function main() {
    const input = require('fs').readFileSync(0, 'utf-8').trim();
    const n = parseInt(input);

    let value = 1;

    for (let i = 0; i < n; i++) {
        let line = "";

        for (let j = value; j <= value + 2; j++) {
            line += j + " ";
        }

        value += 4;
        console.log(line + "PUM");
    }
}

main();