function main() {
    const input = require("fs").readFileSync("/dev/stdin", "utf8");
    const lines = input.split("\n");
    const [hoursSpentTraveling, averageSpeed] = lines.map(Number);
    const fuelRequired = calculateFuelRequired(hoursSpentTraveling, averageSpeed);
    console.log(`${fuelRequired.toFixed(3)}`);
}

function calculateFuelRequired(hoursSpentTraveling, averageSpeed) {
    const  KILOMETERS_PER_LITER = 12.0;
    return (hoursSpentTraveling * averageSpeed) / KILOMETERS_PER_LITER;
}

main();