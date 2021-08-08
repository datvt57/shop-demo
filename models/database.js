var mysql = require('mysql');
var db = null;

if (db == null) {
    db = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'shop-demo'
    })
}

db.connect(function (err) {
    if (err) throw err;
    console.log('Database Connected!');
})

module.exports = db;