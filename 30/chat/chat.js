const init = (io) => {
    io.on("connection", socket => {

        socket.on("join", data => {
            socket.nick = data;
            io.emit("status", {
                time: Date.now(),
                status: data + " dołączył do czatu"
            });
        });

        socket.on("disconnect", () => {
            io.emit("status", {
                time: Date.now(),
                status: socket.nick + " opuścił czat"
            });

        });

        socket.on("message",msg=>{
            io.emit("message",{
                time: Date.now(),
                nick: socket.nick,
                message: msg
            });
        })

    });
}

module.exports = {
    init
}
