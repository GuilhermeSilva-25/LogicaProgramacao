function main() {
    for (let k = 0; k <= 10; k++) {
        let i = k * 0.2;
        for (let j = 1; j <= 3; j++) {
            let valueJ = j + i;
            if (i === 0 || i === 1 || i === 2) {
                console.log(`I=${i.toFixed(0)} J=${valueJ.toFixed(0)}`);
            } else {
                console.log(`I=${i.toFixed(1)} J=${valueJ.toFixed(1)}`);
            }
        }
    }
}

main();