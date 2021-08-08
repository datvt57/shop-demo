var bcrypt = require('bcryptjs');
var db = require('./database');
var data = [];

function cryptPassword(password) {
    passwordHashed = bcrypt.hashSync(password.toString(), 10);
    return passwordHashed;
}

function queryDatabase(query) {
    db.query(query,function (err, d){
        if (err) {
            console.log(err);
        }
        data = d;
    });
    return data;
}

exports.userList = function () {
    let query = "select id, username, email, birthdate from users;";
    let data = queryDatabase(query);
    return data;
}

exports.search = function (string) {
    let query = "select id, username, email, birthdate from users where username like '%" + string + "%';";
    let data = queryDatabase(query);
    return data;
}

exports.addUser = function (req) {
    let data = req.body.username;
    if (data != null) {
        data = req.body;
        data['password'] = cryptPassword(data['password']);
        let query = "insert into users(username, password, email, birthdate) values ('" + data['username'] + "', '" + data['password'] + "','" + data['email'] + "','" + data['birthdate'] + "');";
        try {
            db.query(query, function (err, d) {
                if (err) throw err;
            });
        } catch (err) {
            return false;
        }
        return true;
    } else {
        return false;
    }
}