function main() {
    const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
    const correctPassword = 2002;
    let i = 0;

    while (true) {
        let password = Number(input[i++]);

        if (password === correctPassword) {
            console.log("Acesso Permitido");
            break;
        } else {
            console.log("Senha Invalida");
        }
    }
}

main();