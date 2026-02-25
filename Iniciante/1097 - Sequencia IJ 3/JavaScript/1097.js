function main() {
  let initialValueJ = 7;

  for (let i = 1; i <= 9; i += 2) {
    for (let j = initialValueJ; j >= initialValueJ - 2; j--) {
      console.log(`I=${i} J=${j}`);
    }
    initialValueJ += 2;
  }
}

main();
