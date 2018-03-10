var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + " order by burger_name ASC;";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
  },
  insertOne: function(tableInput, col, val, cb) {

    var queryString = "INSERT INTO " + tableInput  + "(" + col + ") VALUES ('" + val +"');";
    console.log(queryString)

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableInput, updateId, cb) {
      var queryString = "UPDATE " + tableInput + " SET devoured = 1 where id = " + updateId + ";";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
  },
  throwUp: function(tableInput, updateId, cb) {
      var queryString = "UPDATE " + tableInput + " SET devoured = 0 where id = " + updateId + ";";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
  },
  deleteOne: function(tableInput, updateId, cb) {
      var queryString = "DELETE FROM " + tableInput + " where id = " + updateId + ";";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
  },
}

module.exports = orm;
