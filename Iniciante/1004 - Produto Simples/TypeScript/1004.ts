import * as fs from "fs";

function main(): void {
    const input: string = fs.readFileSync("/dev/stdin", "utf8");
    const lines: string[] = input.split("\n");
    const [valueOne, valueTwo] = lines.map(Number);
    const prod: number = valueOne * valueTwo;
    console.log(`PROD = ${prod}`);
}

main();