function main() {
    const input = require('fs').readFileSync(0, 'utf-8').trim();
    let n = parseInt(input);
    let factorialOfN = 1;

    while (n > 0) {
        factorialOfN *= n;
        n--;
    }

    console.log(factorialOfN);
}

main();