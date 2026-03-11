function main() {
    const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
    let i = 0;

    while (true) {
        let x = input[i++];
        let y = input[i++];

        if (x === y) {
            break;
        } else if (x < y) {
            console.log("Crescente");
        } else {
            console.log("Decrescente");
        }
    }
}

main();