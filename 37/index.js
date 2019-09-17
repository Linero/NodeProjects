const cluster = require("cluster");

if(cluster.isMaster){

    const cpus = require("os").cpus().length;
    for(let i=0;i<cpus;i++){
        cluster.fork();
    }

    cluster.on("exit",()=>{
        console.log(`process o PID: ${process.pid} zakończył się, uruchamiam nowy...`);
        cluster.fork();
    });
}
else{

    const app = require("express")();
    app.get("/", function(req, res) {
        res.send(`Witaj! To zapytanie obsługuje process o PID: ${process.pid}`);   
    });
    
    
    app.listen(8080, function() {
    
        console.log(`Serwer został uruchomiony pod adresem http://localhost:8080 i jest obsługiwany przez process o PID: ${process.pid}`);
    
    });
}

