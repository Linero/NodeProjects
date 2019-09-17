(function () {

    const socket = io.connect("http://localhost:8080");

    let joined = false;


    const joinForm = $("#join-form"),
        nick = $("#nick"),
        chatForm = $("#chat-form"),
        chatWindow = $("#chat-window"),
        chatMessage = $("#message"),
    chatStatusTpl = Handlebars.compile($("#chat-status-template").html()),
    chatMessageTpl = Handlebars.compile($("#chat-message-template").html());
    joinForm.on("submit", function (e) {

        e.preventDefault();

        const nickName = $.trim(nick.val());

        if (nickName === "") {
            nick.addClass("invalid");
        } else {
            nick.removeClass("invalid");

            socket.emit("join", nickName);

            joinForm.hide();
            chatForm.show();
            joined = true;
        }

    });

    chatForm.on("submit", function (e) {

        e.preventDefault();

        const message = $.trim(chatMessage.val());

        if (message !== "") {
            socket.emit("message", message);
            chatMessage.val("");
        }

    });


        socket.on("status", data => {

            if(!joined)return
        const html = chatStatusTpl({
            status: data.status,
            time: formatDate(data.time)
        });
        chatWindow.append(html);
        scrollToBottom();
    });
    socket.on("message", data => {
        if(!joined)return
        const html = chatMessageTpl({
            message: data.message,
            time: formatDate(data.time),
            nick: data.nick
        });
        chatWindow.append(html);
        scrollToBottom();
    });

    const scrollToBottom = ()=>{
        chatWindow.scrollTop(chatWindow.prop("scrollHeight"));
    }
    const formatDate = (time) => {
        const date = new Date(time);
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();

        return (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    }


})();
