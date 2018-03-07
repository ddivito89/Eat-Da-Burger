var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    add: function(name, cb) {
      orm.insertOne("burgers", "burger_name", name,  function(res) {
        cb(res);
      });
    },
    eat: function(updateId, cb) {
      orm.updateOne("burgers", updateId,  function(res) {
        cb(res);
      });
    }
}

module.exports = burger;
