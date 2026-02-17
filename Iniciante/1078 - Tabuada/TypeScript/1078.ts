import * as fs from "fs";

function main(): void {
   const input: string = fs.readFileSync('/dev/stdin', 'utf8');
   const n: number = parseInt(input);

   for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${n} = ${i * n}`);
   }
}

main();