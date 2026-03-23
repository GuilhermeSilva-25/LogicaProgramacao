function main() {
    let alcohol = 0;
    let gasoline = 0;
    let diesel = 0;

    const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

    let i = 0;

    while (true) {
        let code = Number(input[i++]);

        if (code === 4) {
            break;
        }

        switch (code) {
            case 1:
                alcohol++;
                break;
            case 2:
                gasoline++;
                break;
            case 3:
                diesel++;
                break;
        }
    }

    console.log("MUITO OBRIGADO");
    console.log(`Alcool: ${alcohol}`);
    console.log(`Gasolina: ${gasoline}`);
    console.log(`Diesel: ${diesel}`);
}

main();