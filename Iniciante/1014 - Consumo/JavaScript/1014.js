function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  const [totalDistanceTraveled, totalFuelUsed] = lines.map(Number);
  const averageCarConsumption = calculateAverageCarConsumption(
    totalDistanceTraveled,
    totalFuelUsed
  );
  console.log(`${averageCarConsumption.toFixed(3)} km/l`);
}

function calculateAverageCarConsumption(distance, fuel) {
  return distance / fuel;
}

main();
