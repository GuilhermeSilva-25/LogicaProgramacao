import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync(0, "utf-8").trim();
  const n: number = parseInt(input);

  for (let i = 0; i < n - 1; i++) {
    process.stdout.write("Ho ");
  }

  console.log("Ho!");
}

main();
