const Q = require("q");
const mongoose = require("mongoose");

const DB_USER = "mkotasinski";
const DB_PASSWORD = "wFH8Ims1ATsjfRjI";


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0-vthe5.mongodb.net/mkotasinski?retryWrites=true`, {
    useNewUrlParser: true
});


var schema = new mongoose.Schema({
    name: String,
    lastName: String
});

var User = mongoose.model("User", schema);

function addUser(userData) {

    const def= Q.defer();
    const user = new User(userData);

    user.save(function(err, user) {

        if(err) {
            def.reject(err);
        } else {
            def.resolve(user);
        }

    });

    return def.promise;

}

function getUser(id) {

    const def = Q.defer();

    User.findById(id).exec(function(err, user) {

        if(err) {
            def.reject(err);
        } else {
            def.resolve(user);
        }

    });
    return def.promise;

}

function updateUser(userData) {

    const def = Q.defer();
    const id = userData.id;

    delete userData.id;

    User.findByIdAndUpdate(id, userData).exec(function(err, user) {

        if(err) {
            def.reject(err);
        } else {
            def.resolve(user);
        }

    });

    return def.promise;

}

function deleteUser(id) {

    const def= Q.defer();
    User.findByIdAndDelete(id).exec(function(err, user) {

        if(err) {
            def.reject(err);
        } else {
            def.resolve(user);
        }

    });

    return def.promise;

}

function listUsers() {

    const def = Q.defer();

    User.find({}).exec(function(err, users) {

        if(err) {
            def.reject(err);
        } else {
            def.resolve(users);
        }

    });

    return def.promise;

}

module.exports = {
    add: addUser,
    get: getUser,
    update: updateUser,
    delete: deleteUser,
    list: listUsers
};
