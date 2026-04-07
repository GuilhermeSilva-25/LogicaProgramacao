function main() {
    const fs = require('fs');
    const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

    let numberOfAges = 0;
    let sumOfAges = 0;

    for (let i = 0; i < input.length; i++) {
        let age = parseInt(input[i]);

        if (age < 0) {
            break;
        }

        numberOfAges++;
        sumOfAges += age;
    }

    let averageAges = sumOfAges / numberOfAges;
    console.log(averageAges.toFixed(2));
}

main();