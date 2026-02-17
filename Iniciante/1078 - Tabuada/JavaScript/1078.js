function main() {
   const input = require('fs').readFileSync('/dev/stdin', 'utf8');
   const n = parseInt(input);

   for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${n} = ${i * n}`);
   }
}

main();