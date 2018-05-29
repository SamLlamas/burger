var connection = require("./connection.js");

var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers";
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });

  },
  insertOne: function(name) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
    console.log(queryString);
    connection.query(queryString, name, function(err) {
      if (err) throw err;
    });
    
  },

  updateOne: function(name) {
    var queryString = "UPDATE burgers SET devoured = false WHERE burger_name = ?";
    console.log(queryString);
    connection.query(
      queryString, name, function(err) {
        if (err) throw err;
      }
    );
  }
};

module.exports = orm;
