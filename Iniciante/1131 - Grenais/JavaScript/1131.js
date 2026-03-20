function main() {
    const input = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number);

    let i = 0;

    let NumberOfGames = 0;
    let interVictories = 0;
    let gremioVictories = 0;
    let draws = 0;

    while (true) {
        let interGoals = input[i++];
        let gremioGoals = input[i++];

        NumberOfGames++;

        if (interGoals === gremioGoals) {
            draws++;
        } else if (interGoals > gremioGoals) {
            interVictories++;
        } else {
            gremioVictories++;
        }

        let code;

        while (true) {
            console.log("Novo grenal (1-sim 2-nao)");
            code = input[i++];
            if (code === 1 || code === 2) break;
        }

        if (code === 2) break;
    }

    console.log(`${NumberOfGames} grenais`);
    console.log(`Inter:${interVictories}`);
    console.log(`Gremio:${gremioVictories}`);
    console.log(`Empates:${draws}`);

    if (interVictories === gremioVictories) {
        console.log("Nao houve vencedor");
    } else if (interVictories > gremioVictories) {
        console.log("Inter venceu mais");
    } else {
        console.log("Gremio venceu mais");
    }
}

main();