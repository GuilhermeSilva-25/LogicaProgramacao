function main() {
    const input = require("fs").readFileSync(0, "utf-8").trim();
    const n = parseInt(input);

    for (let i = 0; i < n - 1; i++) {
        process.stdout.write("Ho ");
    }

    console.log("Ho!");
}

main();