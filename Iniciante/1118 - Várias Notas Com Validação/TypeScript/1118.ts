import * as fs from "fs";

function main(): void {
    const input: string[] = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);
    let index: number = 0;

    while (true) {
        let sumOfGrades: number = 0;
        let counter: number = 0;

        while (counter < 2) {
            let grade: number = parseFloat(input[index++]);

            if (grade >= 0 && grade <= 10) {
                sumOfGrades += grade;
                counter++;
            } else {
                console.log("nota invalida");
            }
        }

        console.log("media = " + (sumOfGrades / 2).toFixed(2));

        let code;

        do {
            console.log("novo calculo (1-sim 2-nao)");
            code = parseInt(input[index++]);
        } while (code < 1 || code > 2);

        if (code === 2) {
            break;
        }
    }
}

main();