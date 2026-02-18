const WEIGHT_A = 2.0;
const WEIGHT_B = 3.0;
const WEIGHT_C = 5.0;
const TOTAL_WEIGHT = WEIGHT_A + WEIGHT_B + WEIGHT_C;

function main() {
  const input = require("fs").readFileSync(0, "utf8").trim().split(/\s+/);

  const NUMBER_OF_NOTES = 3;

  let index = 0;
  const n = parseInt(input[index++]);

  for (let i = 0; i < n; i++) {
    const notes = [];
    for (let j = 0; j < NUMBER_OF_NOTES; j++) {
      notes.push(parseFloat(input[index++]));
    }
    const average = calculateAverage(notes);
    console.log(average.toFixed(1));
  }
}

function calculateAverage(notes) {
  return (
    (notes[0] * WEIGHT_A + notes[1] * WEIGHT_B + notes[2] * WEIGHT_C) /
    TOTAL_WEIGHT
  );
}


main();
