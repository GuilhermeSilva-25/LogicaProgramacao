import * as fs from "fs";

function main(): void {
    const input: string = fs.readFileSync("/dev/stdin", "utf8");
    const salary: number = parseFloat(input);
    const valueIncomeTax: number = calculateIncomeTax(salary);
    print(valueIncomeTax);
}

function calculateIncomeTax(salary: number): number {
    let tax: number = 0.0;

    if (salary > 4500.00) {
        tax += (salary - 4500.00) * 0.28;
        salary = 4500.00;
    }

    if (salary > 3000.00) {
        tax += (salary - 3000.00) * 0.18;
        salary = 3000.00;
    }

    if (salary > 2000.00) {
        tax += (salary - 2000.00) * 0.08;
    }

    return tax;
}

function print(valueIncomeTax: number): void {
    if (valueIncomeTax === 0.0) {
        console.log("Isento");
    } else {
        console.log(`R$ ${valueIncomeTax.toFixed(2)}`);
    }
}

main();
