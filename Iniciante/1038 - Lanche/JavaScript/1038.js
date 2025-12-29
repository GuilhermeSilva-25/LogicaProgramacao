const PRICE_TABLE = [4.00, 4.50, 5.00, 2.00, 1.50];

function main() {
    const input = require("fs").readFileSync("/dev/stdin", "utf8");
    const lines = input.trim().split(/\s+/);
    const [code, amount] = lines.map(Number);
    const totalBill = calculateTotalBill(code, amount);
    console.log(`Total: R$ ${totalBill.toFixed(2)}`);
}

function calculateTotalBill(code, amount) {
    return PRICE_TABLE[code - 1] * amount;
}

main();