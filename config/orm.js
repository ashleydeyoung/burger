const connection = require("../config/connection.js");

function selectAll() {
    var query = "SELECT * FROM burgers";
    connection.query(query, function (err, result) {
        if (err) throw err;
        return result
    })
};

function insertOne(burger) {
    var query = "INSERT INTO burgers (burger) VALUES (?)";
    connection.query(query, [burger], function (err, result) {
        if (err) throw err;
        return result
    })
};

function updateOne(burger, id) {
    var query = "UPDATE burgers SET burger = ? where id =?";
    connection.query(query, [burger], id, function (err, result) {
        if (err) throw err;
        return result
    })
}



module.exports = orm;