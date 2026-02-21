import * as fs from "fs";

function main(): void {
    const input: string[] = fs.readFileSync(0, 'utf8').trim().split('\n');
    const n: number = parseInt(input[0], 10);

    let totalGuineaPigs: number = 0;
    let totalRabbits: number = 0;
    let totalRats: number = 0;
    let totalFrogs: number = 0;

    for (let i = 1; i <= n; i++) {
        const [numberStr, letter] = input[i].trim().split(/\s+/);
        const number: number = parseInt(numberStr, 10);

        totalGuineaPigs += number;

        switch (letter) {
            case 'C':
                totalRabbits += number;
                break;
            case 'R':
                totalRats += number;
                break;
            case 'S':
                totalFrogs += number;
                break;
        }
    }

    const percentageRabbits: number = totalGuineaPigs > 0 ? (totalRabbits / totalGuineaPigs) * 100 : 0;
    const percentageRats: number = totalGuineaPigs > 0 ? (totalRats / totalGuineaPigs) * 100 : 0;
    const percentageFrogs: number = totalGuineaPigs > 0 ? (totalFrogs / totalGuineaPigs) * 100 : 0;

    console.log(`Total: ${totalGuineaPigs} cobaias`);
    console.log(`Total de coelhos: ${totalRabbits}`);
    console.log(`Total de ratos: ${totalRats}`);
    console.log(`Total de sapos: ${totalFrogs}`);
    console.log(`Percentual de coelhos: ${percentageRabbits.toFixed(2)} %`);
    console.log(`Percentual de ratos: ${percentageRats.toFixed(2)} %`);
    console.log(`Percentual de sapos: ${percentageFrogs.toFixed(2)} %`);
}

main();