// process.stdout.write("Podaj wiadomość\n> ");
// process.stdin.on("readable", function x() {
//     const line = process.stdin.read();
//     if (line === null) return;
//     else if (line.toString().trim() === "close") return process.exit();
//     console.log(line);
//     process.stdout.write("Wpisałeś: " + line + "\n> ");
//     x();
// });
// process.on("uncaughtException", err => {
//     console.log("Wystąpił błąd: " + err.message);
// })

// const a = b + 1;

// console.log("Program nadal dziala");

// process.once("beforeExit", () => {
//     console.log("Opóźnienie procesu zamknięcia o 2s")
//     setTimeout(() => {
//         console.log("zamknięcie procesu...")
//     }, 2000);
// })

// console.log(process.argv.slice(2))
// setTimeout(() => {

// }, 10000);
// process.once("SIGINT", () => {
//     console.log("Naciśnij Ctrl+c by zakończyć");
// });