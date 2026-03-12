import * as fs from "fs";

function main(): void {
    const input: string[] = fs.readFileSync(0, 'utf8').trim().split('\n');
    const correctPassword: number = 2002;
    let i: number = 0;

    while (true) {
        let password: number = Number(input[i++]);

        if (password === correctPassword) {
            console.log("Acesso Permitido");
            break;
        } else {
            console.log("Senha Invalida");
        }
    }
}

main();