function main() {
    const input = require("fs").readFileSync(0, 'utf8').trim();
    const value = parseInt(input);

    for (let i = 1; i <= 10000; i++) {
        if (i % value === 2) {
            console.log(i);
        }
    }
}

main();
