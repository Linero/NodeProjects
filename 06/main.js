// const Events = require("events")
// const emitter = new Events();

// emitter.on("message", (msg) => {
//     console.log(`wiadomość ${msg}`)
// })

// emitter.emit("message", "witaj");

const Puller = require("./puller")
const puller = new Puller('https://google.com')

function printData(data) {
    console.log(`Otrzymane dane: ${data.data} z adresu: ${data.url}`);
}
puller.on("data", printData);
puller.pull();

setTimeout(() => {
    puller.stop(printData)
}, 5000)