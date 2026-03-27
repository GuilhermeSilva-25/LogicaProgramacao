function main() {
    const input = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/);

    let x = parseInt(input[0]);
    let y = parseInt(input[1]);
    let counter = 0;

    for (let i = 1; i <= y; i++) {
        process.stdout.write(i.toString());
        counter++;

        if (counter < x) {
            process.stdout.write(" ");
        } else {
            process.stdout.write("\n");
            counter = 0;
        }
    }
}

main();