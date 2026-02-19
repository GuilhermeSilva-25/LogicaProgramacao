const QUANTITY_OF_VALUES = 100;

function main() {
    const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
    
    let higherValue = Number.NEGATIVE_INFINITY;;
    let position = 0;

    for (let i = 0; i < QUANTITY_OF_VALUES; i++) {
        const value = parseInt(input[i]);
        if (value > higherValue) {
            higherValue = value;
            position = i + 1;
        }
    }

    console.log(higherValue);
    console.log(position);
}

main();
