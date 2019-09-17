const exec = require("child_process").exec;
const spawn = require("child_process").spawn;

// exec("ping google.com", (err,stdout,stderr)=>{
// if(err)return console.log(err);

// console.log(stdout);
// console.log(stderr);
// });

const ping = spawn("ping",["google.com"]);

ping.spawn("ping",["google.com"]);
ping.stdout.on("data",data=>{
    console.log(data.toString());

});
ping.stdout.on("close",code=>{
    console.log(`Proces zakończył się z kodem: ${code}`); 
});
