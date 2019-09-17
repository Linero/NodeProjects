const EventEmitter = require("events");
const utils = require("util");

// function Puller(url) {
//     EventEmitter.call(this);
//     this.url = url;
// }
// utils.inherits(Puller, EventEmitter)
// module.exports = Puller
// Puller.prototype.pull = function () {

//     interval = setInterval(() => {
//         this.emit("data", {
//             data: "pobrane dane",
//             url: this.url
//         })
//     }, 1000)
// }

class Puller extends EventEmitter {
    constructor(url) {
        super(EventEmitter);
        this.url = url;
        this.on("removeListener", () => {
            const number = this.listenerCount("data");
            if (number === 0) clearInterval(this.interval)
        })
    }
    pull() {
        this.interval = setInterval(() => {
            this.emit("data", {
                data: "pobrane dane",
                url: this.url
            })
        }, 1000)
    }
    stop(cb) {
        this.removeListener("data", cb)
    }
}
module.exports = Puller