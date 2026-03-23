import * as fs from "fs";

function main(): void {
    let alcohol: number = 0;
    let gasoline: number = 0;
    let diesel: number = 0;

    const input: string[] = fs.readFileSync(0, 'utf-8').trim().split('\n');

    let i: number = 0;

    while (true) {
        let code: number = Number(input[i++]);

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