const mongoose = require("mongoose");
const validURL = require("valid-url");
const random = require("randomstring");

const WEBSITE_URL = "http://localhost:8080/";
const DB_USER = "mkotasinski";
const DB_PASSWORD = "wFH8Ims1ATsjfRjI";



mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0-vthe5.mongodb.net/mkotasinski?retryWrites=true`, {
    useNewUrlParser: true
});

const shema = new mongoose.Schema({
    short: String,
    url: String
});
const URL = mongoose.model("URL",shema);


const validateURL = (url)=>{
    return validURL.isUri(url);
}
const shorten = (value,cb)=>{
if(!validateURL(value)) return cb(new Error(`URL is not valid`));
URL.findOne({url:value}).exec((err,url)=>{
    if(err) return cb(err);
    if(!url){
const short=random.generate(5);
const newURL = new URL({
    short,
    url: value
});
newURL.save((err,url)=>{
if(err)return cb(err);
cb(null,WEBSITE_URL+ url.short);
});
    }
    else cb(null, WEBSITE_URL+ url.short)
});
}

const findURL = (short,cb)=>{
    URL.findOne({short:short}).exec((err,url)=>{
        if(err)return cb(new Error(`URL not found`));
        cb(null,url.url);
    });
}

module.exports={
    shorten,
    findURL
};
