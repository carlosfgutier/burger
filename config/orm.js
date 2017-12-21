var connection = require("./connection.js");

var orm = {
	selectAll: function(tableName, cb) {
		var queryString = 'SELECT * FROM ??';
		connection.query(queryString, {tableName}, function(err, res) {
			cb(results);
		});
	},

	insertOne: function(burgerName, boolean, timestamp, cb) {
		var queryString = 'INSERT INTO burgers (burger_name, eaten, date) VALUES (?, ?, ?)';
		connection.query(queryString, [burgerName, boolean, timestamp], function(err, res) {
			cb(results);
		});
	},

	updateOne: function(thingOne, valueOne, thingTwo, valueTwo, cb) {
		var queryString = 'UPDATE burgers SET ?? = ? WHERE ?? = ?';
		connection.query(queryString, [thingOne, valueOne, thingTwo, valueTwo], function(err, res) {
			cb(results);
		});
	}
};

module.exports = orm;