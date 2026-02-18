import * as fs from "fs";

const WEIGHT_A: number = 2.0;
const WEIGHT_B: number = 3.0;
const WEIGHT_C: number = 5.0;
const TOTAL_WEIGHT: number = WEIGHT_A + WEIGHT_B + WEIGHT_C;

function main(): void {
  const input: string[] = fs.readFileSync(0, "utf8").trim().split(/\s+/);

  const NUMBER_OF_NOTES: number = 3;

  let index: number = 0;
  const n: number = parseInt(input[index++]);

  for (let i = 0; i < n; i++) {
    const notes: number[] = [];
    for (let j = 0; j < NUMBER_OF_NOTES; j++) {
      notes.push(parseFloat(input[index++]));
    }
    const average: number = calculateAverage(notes);
    console.log(average.toFixed(1));
  }
}

function calculateAverage(notes: number[]): number {
  return (
    (notes[0] * WEIGHT_A + notes[1] * WEIGHT_B + notes[2] * WEIGHT_C) /
    TOTAL_WEIGHT
  );
}


main();
