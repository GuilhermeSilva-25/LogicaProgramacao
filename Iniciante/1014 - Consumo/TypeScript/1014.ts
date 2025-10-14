import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const lines: string[] = input.split("\n");
  const [totalDistanceTraveled, totalFuelUsed] = lines.map(Number);
  const averageCarConsumption: number = calculateAverageCarConsumption(
    totalDistanceTraveled,
    totalFuelUsed
  );
  console.log(`${averageCarConsumption.toFixed(3)} km/l`);
}

function calculateAverageCarConsumption(distance: number, fuel: number): number {
  return distance / fuel;
}

main();
