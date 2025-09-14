function main() {
    const input = require("fs").readFileSync("/dev/stdin", "utf8");
    const lines = input.split("\n");
    const [valueOne, valueTwo] = lines.map(Number);
    const prod = valueOne * valueTwo;
    console.log(`PROD = ${prod}`);
}

main();