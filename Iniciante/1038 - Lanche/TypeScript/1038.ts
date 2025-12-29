import * as fs from "fs";

const PRICE_TABLE: number[] = [4.00, 4.50, 5.00, 2.00, 1.50];

function main(): void {
    const input: string = fs.readFileSync("/dev/stdin", "utf8");
    const lines: string[] = input.trim().split(/\s+/);
    const [code, amount] = lines.map(Number);
    const totalBill: number = calculateTotalBill(code, amount);
    console.log(`Total: R$ ${totalBill.toFixed(2)}`);
}

function calculateTotalBill(code: number, amount: number): number {
    return PRICE_TABLE[code - 1] * amount;
}

main();