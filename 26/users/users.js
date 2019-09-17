const mongoose = require("mongoose");
// wFH8Ims1ATsjfRjI
const DB_USER = "mkotasinski";
const DB_PASSWORD = "wFH8Ims1ATsjfRjI";


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0-vthe5.mongodb.net/mkotasinski?retryWrites=true`, {
    useNewUrlParser: true
});

const schema = new mongoose.Schema({
    name: String,
    lastName: String
});

User = mongoose.model("User", schema, "users");

function addUser(userData, cb) {

    const user = new User(userData);
    user.save((err, user) => {
        if (err) cb(err);
        else cb(null, user);
    });

}

function getUser(id, cb) {
    User.findById({
        _id: id
    }).exec((err, user) => {
        if (err) cb(err);
        else cb(null, user);
    });

}

function updateUser(userData, cb) {
    const id = userData.id
    User.findByIdAndUpdate(id, userData).exec((err, user) => {
        if (err) cb(err);
        else cb(null, user);
    });

}

function deleteUser(id, cb) {

    User.findByIdAndRemove(id).exec((err, user) => {
        if (err) cb(err);
        else cb(null, user);
    });

}

function listUsers(cb) {
    User.find({}).exec((err, users) => {
        if (err) cb(err);
        else cb(null, users);
    });
}

module.exports = {
    add: addUser,
    get: getUser,
    update: updateUser,
    delete: deleteUser,
    list: listUsers
};