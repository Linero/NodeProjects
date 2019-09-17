const EventEmitter = require("events").EventEmitter;
const Q = require("q");
const fs = require("fs");

function readFile(path) {

    var ev = new EventEmitter();

    if(!path) {
       process.nextTick(()=>ev.emit("error", new Error(`Path must be declared`)));
        return ev;
    }

    fs.readFile(path, function(err, data) {

        if(err) {
            ev.emit("error", err);
        } else {
            ev.emit("data", data);
        }

    });

    return ev;

}

function readFileSync(path) {

    try{
    return fs.readFileSync(path);
    }
    catch(e){
        return null;
    }

}

const readFile2 =(path,cb)=>{

    if(!path) return process.nextTick(()=>cb(new Error("Path must be declared!")));

    fs.readFile(path, function(err, data) {
        if(err) cb(err);
        else cb(null, data);
    });
}

const readFile3 = (path)=>{
 
    const def = Q.defer();

    if(!path){
        def.reject(new Error("Path must be declared!!!"));
        return def.promise;
    }

    fs.readFile(path, function(err, data) {
        if(err) def.reject(err);
        else def.resolve(data);
    });
    return def.promise;
    
}

module.exports = {
    readFile,
    readFileSync,
    readFile2,
    readFile3
};
