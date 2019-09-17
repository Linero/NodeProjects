(function() {
    const socket = io.connect("http://localhost:8080");

    const form = document.querySelector("#form"),
        message = form.querySelector("input[type='text']");

    form.onsubmit = function(e) {

        e.preventDefault();

        if(message.value) {

            socket.emit("message",message.value);
            message.value = "";

        }

    };

    socket.on("message",msg=>{
        console.log(msg);
    });

})();
