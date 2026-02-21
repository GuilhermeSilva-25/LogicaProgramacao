function main() {
    const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');

    const n = parseInt(input[0]);

    let totalGuineaPigs = 0;
    let totalRabbits = 0;
    let totalRats = 0;
    let totalFrogs = 0;

    for (let i = 1; i <= n; i++) {
        const [numberStr, letter] = input[i].split(' ');
        const number = parseInt(numberStr);

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

    const percentageRabbits = (totalRabbits / totalGuineaPigs) * 100;
    const percentageRats = (totalRats / totalGuineaPigs) * 100;
    const percentageFrogs = (totalFrogs / totalGuineaPigs) * 100;

    console.log(`Total: ${totalGuineaPigs} cobaias`);
    console.log(`Total de coelhos: ${totalRabbits}`);
    console.log(`Total de ratos: ${totalRats}`);
    console.log(`Total de sapos: ${totalFrogs}`);
    console.log(`Percentual de coelhos: ${percentageRabbits.toFixed(2)} %`);
    console.log(`Percentual de ratos: ${percentageRats.toFixed(2)} %`);
    console.log(`Percentual de sapos: ${percentageFrogs.toFixed(2)} %`);
}

main();