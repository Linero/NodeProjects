const readline = require('readline');
const fs = require("fs");
const loggs = fs.createWriteStream(`${__dirname}/logs.txt`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.setPrompt(">>>")

// rl.on("line", (line) => {
//     if (line === "exit") return rl.close();
//     console.log(`Wpisałeś: ${line}\n`);
//     rl.prompt();
// });

// const prize = [100, 1000, 2000, 40000, 50000];
// rl.question("Wybierz sejf od 1 do 5\n", (answer) => {
//     console.log(`Wygrałeś ${prize[parseInt(answer)-1]} PLN.`);
//     rl.close();
// });

let percentage = 0;
const printPercentage = () => {
    if (percentage >= 100) {
        rl.write("\nZakończono wczytywanie");
        return rl.close();
    }
    percentage += 5;
    readline.clearLine(rl, 0);
    readline.cursorTo(rl, 0);
    rl.write(`Postęp: ${percentage}%`);
    setTimeout(printPercentage, 200);
}

printPercentage();