function main() {
    const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
    const QUANTITY_OF_VALUES = 6;
    let count = 0;
    let sum = 0.0;

    for (let i = 0; i < QUANTITY_OF_VALUES; i++) {
        const value = parseFloat(input[i]);
        if (value > 0) {
            count++;
            sum += value;
        }
    }

    console.log(`${count} valores positivos`);
    console.log((sum / count).toFixed(1));
}

main();
